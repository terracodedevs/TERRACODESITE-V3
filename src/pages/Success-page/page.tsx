import { useNavigate, useSearch } from '@tanstack/react-router';
import { CheckCircle} from 'lucide-react';

/**
 * PaymentSuccessPage
 *
 * NOTE:
 * - This component assumes the route is already registered elsewhere.
 * - Designed to be used as PayHere Checkout redirect URL.
 */

export default function PaymentSuccessPage() {
  const navigate = useNavigate();

  // PayHere redirects with query params
  const search = useSearch({ strict: false }) as {
    order_id?: string;
    payment_id?: string;
    status_code?: string;
    status_message?: string;
    amount?: string;
    currency?: string;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-lg p-8">
        <div className="flex flex-col items-center text-center">
          <CheckCircle className="h-16 w-16 text-green-500" />

          <h1 className="mt-4 text-2xl font-semibold text-gray-900">
            Payment Successful 🎉
          </h1>

          <p className="mt-2 text-sm text-gray-600">
            Your payment has been processed successfully.
          </p>
        </div>

        <div className="mt-6 space-y-3 rounded-xl bg-gray-50 p-4 text-sm">
          <InfoRow label="Order ID" value={search.order_id} />
          <InfoRow label="Payment ID" value={search.payment_id} />
          <InfoRow
            label="Amount"
            value={formatAmount(search.amount, search.currency)}
          />
          <InfoRow
            label="Status"
            value={search.status_message ?? 'Success'}
          />
        </div>

        <div className="mt-8 flex gap-3">
          <button
            onClick={() => navigate({ to: '/' })}
            className="flex-1 rounded-xl bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-900"
          >
            Go to Dashboard
          </button>
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          You may safely close this page.
        </p>
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value?: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium text-gray-800">{value ?? '—'}</span>
    </div>
  );
}

function formatAmount(amount?: string, currency?: string) {
  if (!amount) return '—';
  return `${currency ?? ''} ${amount}`;
}
