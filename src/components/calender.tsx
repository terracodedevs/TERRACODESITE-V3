import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export interface CalendarProps {
  value?: Date | null;
  onChange?: (date: Date) => void;
  onApply?: (date: Date) => void;
  onClose?: () => void;
  minDate?: Date;
  maxDate?: Date;
  className?: string;
  isPopup?: boolean;
}

interface Holiday {
  date: string; // YYYY-MM-DD
  name: string;
}

const Calendar: React.FC<CalendarProps> = ({
  value,
  onChange,
  onApply,
  onClose,
  minDate,
  maxDate,
  className = "",
  isPopup = false,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(value || null);
  const [currentMonth, setCurrentMonth] = useState(value || new Date());

  // Sri Lanka Holidays 2026 (Manual list for Accuracy, as Poya days vary)
  const holidays2026: Holiday[] = useMemo(() => [
    { date: "2026-01-03", name: "Duruthu Full Moon Poya Day" },
    { date: "2026-01-15", name: "Tamil Thai Pongal Day" },
    { date: "2026-02-01", name: "Navam Full Moon Poya Day" },
    { date: "2026-02-04", name: "National Day" },
    { date: "2026-02-15", name: "Mahasivarathri Day" },
    { date: "2026-03-02", name: "Madin Full Moon Poya Day" },
    { date: "2026-03-21", name: "Id-Ul-Fitr (Ramazan Festival Day)" },
    { date: "2026-04-01", name: "Bak Full Moon Poya Day" },
    { date: "2026-04-03", name: "Good Friday" },
    { date: "2026-04-13", name: "Day prior to Sinhala & Tamil New Year" },
    { date: "2026-04-14", name: "Sinhala & Tamil New Year Day" },
    { date: "2026-05-01", name: "Vesak Poya / Labour Day" },
    { date: "2026-05-30", name: "Adhi Poson Full Moon Poya Day" },
    { date: "2026-06-29", name: "Poson Full Moon Poya Day" },
    { date: "2026-07-29", name: "Esala Full Moon Poya Day" },
    { date: "2026-08-26", name: "Milad un-Nabi" },
    { date: "2026-12-25", name: "Christmas Day" },
  ], []);

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const handleDateClick = (day: number) => {
    const newDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    setSelectedDate(newDate);
    if (onChange) {
      onChange(newDate);
    }
  };

  const handleApply = () => {
    if (selectedDate && onApply) {
      onApply(selectedDate);
    }
  };

  const isToday = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentMonth.getMonth() === today.getMonth() &&
      currentMonth.getFullYear() === today.getFullYear()
    );
  };

  const isSelected = (day: number) => {
    if (!selectedDate) return false;
    return (
      day === selectedDate.getDate() &&
      currentMonth.getMonth() === selectedDate.getMonth() &&
      currentMonth.getFullYear() === selectedDate.getFullYear()
    );
  };

  const getHoliday = (day: number) => {
    const y = currentMonth.getFullYear();
    const m = String(currentMonth.getMonth() + 1).padStart(2, '0');
    const d = String(day).padStart(2, '0');
    const dateStr = `${y}-${m}-${d}`;
    return holidays2026.find(h => h.date === dateStr);
  };

  const isDateDisabled = (day: number) => {
    const date = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    date.setHours(0, 0, 0, 0);

    // Disable today (the form filling date)
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (date.getTime() === today.getTime()) return true;

    // Disable holidays
    if (getHoliday(day)) return true;

    if (minDate) {
      const min = new Date(minDate);
      min.setHours(0, 0, 0, 0);
      if (date < min) return true;
    }

    if (maxDate) {
      const max = new Date(maxDate);
      max.setHours(0, 0, 0, 0);
      if (date > max) return true;
    }

    return false;
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const calendarContent = (
    <div className={`p-6 bg-neutral-900 border border-neutral-700 rounded-2xl text-white shadow-2xl max-w-sm w-full animate-in fade-in zoom-in duration-300 ${className}`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col">
           <span className="text-xs text-[#A4A4A4] uppercase tracking-widest font-bold mb-1">Calendar</span>
           <span className="font-semibold text-xl tracking-tight text-[#FDA10A]">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrevMonth}
            className="p-2 hover:bg-neutral-800 rounded-full transition-colors text-gray-400 hover:text-[#FDA10A]"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={handleNextMonth}
            className="p-2 hover:bg-neutral-800 rounded-full transition-colors text-gray-400 hover:text-[#FDA10A]"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          {isPopup && onClose && (
            <button
              type="button"
              onClick={onClose}
              className="ml-2 p-2 hover:bg-neutral-800 rounded-full transition-colors text-gray-500 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Week Days */}
      <div className="grid grid-cols-7 gap-1 mb-4">
        {weekDays.map((day) => (
          <div key={day} className="text-center text-[10px] font-bold text-gray-500 uppercase py-1">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: firstDayOfMonth }).map((_, index) => (
          <div key={`empty-${index}`} className="p-2" />
        ))}
        {Array.from({ length: daysInMonth }).map((_, index) => {
          const day = index + 1;
          const disabled = isDateDisabled(day);
          const selected = isSelected(day);
          const today = isToday(day);
          const holiday = getHoliday(day);

          return (
            <button
              key={day}
              type="button"
              disabled={disabled}
              onClick={() => handleDateClick(day)}
              title={holiday ? holiday.name : undefined}
              className={`
                h-10 w-full flex flex-col items-center justify-center rounded-xl text-sm transition-all duration-200 relative group
                ${disabled ? 'text-neutral-700 cursor-not-allowed' : 'cursor-pointer'}
                ${selected ? 'bg-gradient-to-br from-[#fda10a] to-[#f56d04] text-white font-bold shadow-lg shadow-[#f56d04]/20' : ''}
                ${!selected && !disabled ? 'hover:bg-neutral-800 hover:text-[#FDA10A] text-gray-400 font-medium' : ''}
                ${holiday && !selected ? 'text-red-400' : ''}
              `}
            >
               <span className="z-10">{day}</span>
               {/* Holiday Dot */}
               {holiday && (
                 <span className={`w-1 h-1 rounded-full absolute bottom-1.5 ${selected ? 'bg-white' : 'bg-red-500'}`}></span>
               )}
               {/* Today underline */}
               {today && !selected && (
                 <span className="w-4 h-0.5 bg-[#FDA10A] absolute bottom-1.5 opacity-50"></span>
               )}
            </button>
          );
        })}
      </div>

      {/* Footer / Apply */}
      <div className="mt-8 pt-4 border-t border-neutral-800 flex items-center justify-between">
         <div className="flex flex-col">
            <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Selected Date</span>
            <span className="text-sm font-semibold text-white">
              {selectedDate ? selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : "None"}
            </span>
         </div>
         <button
            type="button"
            onClick={handleApply}
            disabled={!selectedDate}
            className="px-6 py-2.5 bg-[#FDA10A] hover:bg-[#e89209] disabled:opacity-50 disabled:hover:bg-[#FDA10A] text-black font-bold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-[#FDA10A]/10 text-sm"
         >
            Apply
         </button>
      </div>
    </div>
  );

  if (isPopup) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 backdrop-blur-md bg-black/60">
        <div className="absolute inset-0" onClick={onClose}></div>
        <div onClick={(e) => e.stopPropagation()} className="relative z-10 w-full max-w-sm">
          {calendarContent}
        </div>
      </div>
    );
  }

  return calendarContent;
};

export default Calendar;
