"use client";

import React, { useState, useEffect } from "react";
import { googleConfig } from "@/lib/google-config";

/**
 * GoogleReviews component to display real Google Reviews
 * This component fetches reviews from Google Business Profile
 */
export default function GoogleReviews({ 
  placeId = googleConfig.placeId,
  maxReviews = googleConfig.maxReviews,
  showStars = googleConfig.showStars 
}) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchGoogleReviews();
  }, [placeId, maxReviews]);

  const fetchGoogleReviews = async () => {
    try {
      setLoading(true);
      
      // Using our server-side API route to avoid CORS issues
      const response = await fetch(
        `/api/google-reviews?place_id=${placeId}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch reviews');
      }
      
      const data = await response.json();
      
      if (data.status === 'OK' && data.result.reviews) {
        setReviews(data.result.reviews.slice(0, maxReviews));
      } else {
        throw new Error('No reviews found or API error');
      }
    } catch (err) {
      console.error('Error fetching Google Reviews:', err);
      setError(err.message);
      
      // Fallback to static reviews if API fails
      setReviews(googleConfig.fallbackReviews);
    } finally {
      setLoading(false);
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-3">
        {Array.from({ length: 3 }, (_, i) => (
          <div key={i} className="p-6 border rounded-lg animate-pulse">
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/3"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error && reviews.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600 mb-4">
          Unable to load Google Reviews at the moment.
        </p>
        <a
          href="https://www.google.com/search?q=Motorea+reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="theme-btn inline-block"
        >
          View Reviews on Google
        </a>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {reviews.map((review, index) => (
        <div key={index} className="p-6 border rounded-lg hover:shadow-md transition-shadow">
          {showStars && (
            <div className="flex items-center mb-3">
              {renderStars(review.rating)}
              <span className="ml-2 text-sm text-gray-600">
                {review.rating}/5
              </span>
            </div>
          )}
          
          <p className="mb-4 text-gray-800 leading-relaxed">
            "{review.text}"
          </p>
          
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              — {review.author_name}
            </div>
            {review.time && (
              <div className="text-xs text-gray-500">
                {formatDate(review.time)}
              </div>
            )}
          </div>
        </div>
      ))}
      
      {/* Link to view more reviews */}
      <div className="md:col-span-3 text-center mt-6">
        <a
          href="https://www.google.com/search?q=Motorea+reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          View all reviews on Google →
        </a>
      </div>
    </div>
  );
}
