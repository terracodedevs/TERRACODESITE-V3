import { Heart, MessageCircle, ArrowRight } from 'lucide-react';

interface Article {
  id: string;
  date: string;
  title: string;
  description: string;
  likes: number;
  comments: number;
  image: string;
}

const Articles = () => {
  const articles: Article[] = [
    {
      id: '1',
      date: 'June 27th, 2025',
      title: 'How AI is Redefining Software Development',
      description: 'Discover how AI is accelerating workflows, reducing bugs, and transforming the developer experience - and what it means for your next project.',
      likes: 92,
      comments: 6,
      image: '',
    },
    {
      id: '2',
      date: 'April 12, 2025',
      title: 'Designing for Humans in an AI World',
      description: 'As automation rises, human-centered design matters more than ever. Here\'s how we balance AI logic with user empathy.',
      likes: 192,
      comments: 4,
      image: ''
    },
    {
      id: '3',
      date: 'July 25, 2025',
      title: 'Embracing Diversity in Design',
      description: 'Diversity of thought and background in design teams fosters creativity and innovation, leading to better user experiences.',
      likes: 220,
      comments: 4,
      image: ''
    },
    {
      id: '4',
      date: 'June 20, 2025',
      title: 'Sustainable Design Practices',
      description: 'Exploring eco-friendly materials and methods in design to create a more sustainable future for industry and planet.',
      likes: 180,
      comments: 4,
      image: ''
    },
    {
      id: '5',
      date: 'May 15, 2025',
      title: 'The Future of Accessibility in Design',
      description: 'As we innovate, it\'s crucial to ensure that our designs are inclusive and accessible to all users, regardless of ability.',
      likes: 210,
      comments: 4,
      image: ''
    }
  ];



  return (
    <div className="min-h-screen bg-black text-white py-2 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header 1*/}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#FDA10A] font-light">
            Latest Articles & News
          </h2>
          <p className="text-[#A4A4A4] text-lg md:text-xl lg:text-2xl font-light mt-4">
            Thoughts, tips, and tech deep-dives from the minds building with AI, code, and creativity.
          </p>
        </div>
        {/* Articles Grid */}
        <div className="space-y-8">
          {/* First Row - 2 Articles (1 spans 2 cols, 1 spans 1 col) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* First Article - spans 2 columns */}
            <div className="md:col-span-2 bg-[#1A1A1A] rounded-xl p-8 text-white transition-colors duration-300 hover:bg-[#2C2C2C] cursor-pointer relative overflow-hidden min-h-[450px] flex flex-col justify-end">
              {/* Date Badge */}
              <div className="absolute top-6 left-6">
                <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  {articles[0].date}
                </span>
              </div>
              
              {/* Content */}
              <div className="z-10">
                <h3 className="text-2xl md:text-4xl font-light mb-4 leading-tight">{articles[0].title}</h3>
                <p className="text-gray-400 md:text-xl mb-6">{articles[0].description}</p>
                
                {/* Stats */}
                <div className="flex  items-center gap-6 text-gray-400">
                  <div className="flex items-center gap-2 border-2 border-gray-600 px-3 py-1 rounded-full">
                    <Heart className="w-5 h-5" />
                    <span className="font-medium">{articles[0].likes}</span>
                  </div>
                  <div className="flex items-center gap-2 border-2 border-gray-600 px-3 py-1 rounded-full">
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-medium">{articles[0].comments}k</span>
                  </div>
                  {/* Read More Arrow */}
                  <div className="ml-auto">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Article - spans 1 column */}
            <div className="bg-[#1A1A1A] rounded-xl p-6 text-white transition-colors duration-300 hover:bg-[#2C2C2C] cursor-pointer relative overflow-hidden min-h-[450px] flex flex-col justify-end">
              {/* Date Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-white text-black px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  {articles[1].date}
                </span>
              </div>
              
              {/* Content */}
              <div className="z-10">
                <h3 className="text-2xl md:text-4xl font-light mb-4">{articles[1].title}</h3>
                <p className="text-gray-400 md:text-xl mb-6">{articles[1].description}</p>
                
                {/* Stats */}
                <div className="flex  items-center justify-between">
                  <div className="flex flex-col lg:flex-row items-center gap-4 text-gray-500 text-sm">
                    <div className="flex items-center gap-1.5 border-2 border-gray-600 px-3 py-1 rounded-full ">
                      <Heart className="w-4 h-4" />
                      <span>{articles[1].likes}</span>
                    </div>
                    <div className="flex items-center gap-1.5 border-2 border-gray-600 px-3 py-1 rounded-full">
                      <MessageCircle className="w-4 h-4" />
                      <span>{articles[1].comments}k</span>
                    </div>
                  </div>
                  {/* Read More Arrow */}
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row - 3 Articles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            {articles.slice(2, 5).map((article) => (
              <div key={article.id} className="bg-[#1A1A1A] h-1/2 rounded-xl p-6 text-white transition-colors duration-300 hover:bg-[#2C2C2C] cursor-pointer relative overflow-hidden min-h-[450px] flex flex-col justify-end">
                {/* Date Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-black px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    {article.date}
                  </span>
                </div>
                
                {/* Content */}
                <div className="z-10">
                  <h3 className="text-2xl md:text-4xl font-light mb-4">{article.title}</h3>
                  <p className="text-gray-400 md:text-xl mb-6">{article.description}</p>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-between ">
                    <div className="flex flex-col lg:flex-row  items-center gap-4 text-gray-500 text-sm">
                      <div className="flex items-center gap-1.5 border-2 border-gray-600 px-3 py-1 rounded-full">
                        <Heart className="w-4 h-4" />
                        <span>{article.likes}</span>
                      </div>
                      <div className="flex items-center gap-1.5 border-2 border-gray-600 px-3 py-1 rounded-full">
                        <MessageCircle className="w-4 h-4" />
                        <span>{article.comments}k</span>
                      </div>
                    </div>
                    {/* Read More Arrow */}
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-[#f56d04] hover:bg-[#e55a03] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto group">
            View all Articles
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Articles;