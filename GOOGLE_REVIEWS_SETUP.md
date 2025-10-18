# Google Reviews Integration Setup

This guide will help you connect your "What Buyers Say" section to real Google Reviews.

## Prerequisites

1. A Google Cloud account
2. A Google Business Profile for Motorea
3. Access to your website's environment variables

## Step 1: Get Google API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Places API**:
   - Go to "APIs & Services" > "Library"
   - Search for "Places API"
   - Click "Enable"
4. Create credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy your API key
5. **Important**: Restrict your API key for security:
   - Click on your API key
   - Under "Application restrictions", select "HTTP referrers"
   - Add your domain (e.g., `motorea.co/*`)
   - Under "API restrictions", select "Restrict key" and choose "Places API"

## Step 2: Get Your Google Place ID

1. Go to [Google Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
2. Search for "Motorea" and your location
3. Copy the Place ID (it looks like: `ChIJN1t_tDeuEmsRUsoyG83frY4`)

## Step 3: Configure Environment Variables

Create a `.env.local` file in your project root with:

```bash
NEXT_PUBLIC_GOOGLE_API_KEY=your_actual_api_key_here
NEXT_PUBLIC_GOOGLE_PLACE_ID=your_actual_place_id_here
```

## Step 4: Test the Integration

1. Restart your development server: `npm run dev`
2. Visit your about-us page
3. The reviews should now load from Google (or show fallback reviews if API fails)

## Features

- ✅ **Real Google Reviews**: Fetches actual reviews from your Google Business Profile
- ✅ **Fallback System**: Shows static reviews if API fails
- ✅ **Star Ratings**: Displays 5-star rating system
- ✅ **Responsive Design**: Works on all devices
- ✅ **Loading States**: Shows loading animation while fetching
- ✅ **Error Handling**: Graceful fallback if reviews can't be loaded
- ✅ **Link to Google**: "View all reviews on Google" link

## Troubleshooting

### Reviews not showing?
1. Check your API key is correct
2. Verify Places API is enabled
3. Ensure your Place ID is correct
4. Check browser console for errors

### API quota exceeded?
- Google Places API has usage limits
- Consider upgrading your Google Cloud billing plan
- The component will fall back to static reviews

### CORS errors?
- Make sure your domain is added to API key restrictions
- The API should work from your production domain

## Cost

- Google Places API has a free tier (usually sufficient for small businesses)
- After free tier: ~$0.017 per request
- Typical usage: 1 request per page load

## Security Notes

- Never commit your API key to version control
- Always use environment variables
- Restrict your API key to your domain only
- Monitor your API usage in Google Cloud Console

## Support

If you need help with the setup, check:
1. [Google Places API Documentation](https://developers.google.com/maps/documentation/places/web-service)
2. [Google Cloud Console](https://console.cloud.google.com/)
3. Your browser's developer console for error messages
