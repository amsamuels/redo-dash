'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { LogoIcon } from '@/components/shared/icons';

// export default function RedirectPage() {
//   const { slug } = useParams();
//   const router = useRouter();
//   const [countdown, setCountdown] = useState(2);
//   const [destination, setDestination] = useState('');
  
//   useEffect(() => {
//     // Simulate API call to get destination from slug
//     const getDestination = async () => {
//       // In a real app, this would be an API call to your backend
//       // const res = await fetch(`/api/links/${slug}`);
//       // const data = await res.json();
      
//       // Simulate API response
//       setTimeout(() => {
//         setDestination('https://example.com/your-destination');
//       }, 500);
//     };
    
//     getDestination();
//   }, [slug]);
  
//   useEffect(() => {
//     if (!destination) return;
    
//     // Track the click analytics
//     const trackClick = async () => {
//       // In a real app, this would send analytics data to your backend
//       // await fetch('/api/analytics', {
//       //   method: 'POST',
//       //   body: JSON.stringify({
//       //     slug,
//       //     referrer: document.referrer,
//       //     userAgent: navigator.userAgent,
//       //   }),
//       // });
      
//       console.log('Click tracked:', {
//         slug,
//         referrer: document.referrer,
//         userAgent: navigator.userAgent,
//       });
//     };
    
//     trackClick();
    
//     // Countdown before redirect
//     const timer = setInterval(() => {
//       setCountdown((prev) => {
//         if (prev <= 1) {
//           clearInterval(timer);
//           window.location.href = destination;
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);
    
//     return () => clearInterval(timer);
//   }, [destination, slug]);
  
//   return (
//     <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-background to-muted p-4">
//       <div className="flex w-full max-w-md flex-col items-center justify-center space-y-8 rounded-lg border bg-card p-8 shadow-lg">
//         <LogoIcon className="h-16 w-16 text-primary animate-pulse" />
        
//         <div className="space-y-2 text-center">
//           <h1 className="text-2xl font-bold">Redirecting you to your destination</h1>
//           <p className="text-muted-foreground">
//             {destination ? (
//               <>You will be redirected in {countdown} seconds...</>
//             ) : (
//               <>Loading your destination...</>
//             )}
//           </p>
//         </div>
        
//         {destination && (
//           <div className="w-full rounded-md bg-muted p-4">
//             <p className="break-all text-sm text-muted-foreground">
//               Destination: <span className="font-medium">{destination}</span>
//             </p>
//           </div>
//         )}
        
//         <div className="w-full">
//           <div className="relative h-1 w-full overflow-hidden rounded-full bg-muted">
//             <div
//               className="absolute left-0 top-0 h-full bg-primary transition-all"
//               style={{ width: destination ? `${((2 - countdown) / 2) * 100}%` : '60%' }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }