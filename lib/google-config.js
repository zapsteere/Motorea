/**
 * Google API Configuration
 * 
 * To set up Google Reviews integration:
 * 
 * 1. Go to Google Cloud Console (https://console.cloud.google.com/)
 * 2. Create a new project or select existing one
 * 3. Enable the "Places API" 
 * 4. Create credentials (API Key)
 * 5. Restrict the API key to your domain for security
 * 6. Get your Google Place ID from Google Maps
 * 
 * Find your Place ID:
 * 1. Go to Google Maps
 * 2. Search for your business
 * 3. Click on your business listing
 * 4. Look at the URL - the Place ID is the long string after "place_id="
 */

export const googleConfig = {
  // Replace with your actual Google API Key
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || 'YOUR_API_KEY_HERE',
  
  // Replace with your actual Google Place ID
  placeId: process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID || 'YOUR_GOOGLE_PLACE_ID',
  
  // API endpoints
  placesApiUrl: 'https://maps.googleapis.com/maps/api/place/details/json',
  
  // Default settings
  maxReviews: 3,
  showStars: true,
  fallbackReviews: [
    {
      author_name: "Sarah K",
      rating: 5,
      text: "Exactly as described — zero hassle. Delivery in 4 days.",
      time: Date.now()
    },
    {
      author_name: "John D", 
      rating: 5,
      text: "Video + report gave me confidence. Would buy again.",
      time: Date.now()
    },
    {
      author_name: "Ahmed R",
      rating: 5, 
      text: "Great communication and no hidden fees. Recommend.",
      time: Date.now()
    }
  ]
};

/**
 * Instructions for setup:
 * 
 * 1. Add to your .env.local file:
 *    NEXT_PUBLIC_GOOGLE_API_KEY=your_actual_api_key_here
 *    NEXT_PUBLIC_GOOGLE_PLACE_ID=your_actual_place_id_here
 * 
 * 2. Get your Google Place ID:
 *    - Go to https://developers.google.com/maps/documentation/places/web-service/place-id
 *    - Use the Place ID Finder tool
 *    - Search for "Motorea" and your location
 * 
 * 3. Enable billing in Google Cloud Console (required for Places API)
 *    - The API has a free tier but requires billing to be enabled
 */
