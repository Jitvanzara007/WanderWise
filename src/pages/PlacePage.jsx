import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FiMapPin, FiCalendar, FiDollarSign, FiInfo, FiClock, FiSun, FiStar } from 'react-icons/fi';

const PlacePage = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated API call - replace with actual API call
    const fetchPlaceDetails = async () => {
      try {
        // Mock data for different places
        const places = {
          '1': {
            id: '1',
            name: 'Mount Fuji',
            location: 'Tokyo, Japan',
            description: 'Mount Fuji is Japan\'s highest mountain and one of its most iconic symbols. This active volcano stands at 3,776 meters and offers breathtaking views of the surrounding landscape.',
            image: 'https://images.unsplash.com/photo-1570459029079-2e5e2ccf9a1c',
            rating: 4.9,
            price: '¥5,000',
            openingHours: '24/7 (Best viewed at sunrise)',
            bestTimeToVisit: 'July to September',
            highlights: [
              'Iconic Japanese landmark',
              'UNESCO World Heritage Site',
              'Stunning sunrise views',
              'Hiking trails for all levels',
            ],
            tips: [
              'Book accommodation in advance during climbing season',
              'Start early to avoid crowds',
              'Check weather conditions before climbing',
              'Bring appropriate hiking gear',
            ],
          },
          '2': {
            id: '2',
            name: 'Eiffel Tower',
            location: 'Paris, France',
            description: 'The Eiffel Tower is a wrought-iron lattice tower located on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower.',
            image: 'https://images.unsplash.com/photo-1543349689-9a4d426bee8e',
            rating: 4.8,
            price: '€26',
            openingHours: '9:00 AM - 12:45 AM',
            bestTimeToVisit: 'April to June, September to October',
            highlights: [
              'Iconic Paris landmark',
              'Panoramic city views',
              'Evening light show',
              'Three observation decks',
            ],
            tips: [
              'Book tickets in advance to avoid long queues',
              'Visit early morning or late evening for fewer crowds',
              'Take the stairs to the second floor for a unique experience',
              'Stay for the evening light show',
            ],
          },
          '3': {
            id: '3',
            name: 'Bali Beaches',
            location: 'Bali, Indonesia',
            description: 'Bali\'s beaches are world-renowned for their pristine white sand, crystal clear waters, and stunning sunsets. From popular surf spots to hidden coves, there\'s a beach for every type of traveler.',
            image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
            rating: 4.7,
            price: 'Free',
            openingHours: '24/7',
            bestTimeToVisit: 'April to October',
            highlights: [
              'World-class surfing spots',
              'Stunning sunsets',
              'Water sports activities',
              'Beachfront dining',
            ],
            tips: [
              'Visit early morning for the best waves',
              'Bring reef-safe sunscreen',
              'Check tide times before swimming',
              'Respect local customs and dress codes',
            ],
          },
        };

        const selectedPlace = places[id] || null;
        setPlace(selectedPlace);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching place details:', error);
        setLoading(false);
      }
    };

    fetchPlaceDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!place) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Place Not Found</h2>
          <p className="text-gray-600">The place you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
          <img
            src={place.image}
            alt={place.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h1 className="text-4xl font-bold mb-2">{place.name}</h1>
            <div className="flex items-center">
              <FiMapPin className="mr-2" />
              <p>{place.location}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
              <p className="text-gray-600">{place.description}</p>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Highlights</h2>
              <ul className="space-y-2">
                {place.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <FiStar className="text-yellow-400 mt-1 mr-2" />
                    <span className="text-gray-600">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tips */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Travel Tips</h2>
              <ul className="space-y-2">
                {place.tips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <FiInfo className="text-blue-500 mt-1 mr-2" />
                    <span className="text-gray-600">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Info</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FiDollarSign className="text-gray-400 mr-2" />
                  <span className="text-gray-600">Price: {place.price}</span>
                </div>
                <div className="flex items-center">
                  <FiClock className="text-gray-400 mr-2" />
                  <span className="text-gray-600">Hours: {place.openingHours}</span>
                </div>
                <div className="flex items-center">
                  <FiSun className="text-gray-400 mr-2" />
                  <span className="text-gray-600">
                    Best Time: {place.bestTimeToVisit}
                  </span>
                </div>
                <div className="flex items-center">
                  <FiStar className="text-yellow-400 mr-2" />
                  <span className="text-gray-600">Rating: {place.rating}/5</span>
                </div>
              </div>
            </div>

            {/* Add to Trip Button */}
            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
              Add to My Trip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacePage; 