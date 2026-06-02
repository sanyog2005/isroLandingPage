/**
 * Hero Video Integration Guide
 * 
 * OPTION 1: Local Video File
 * ============================
 * 1. Place your video in public/videos/ folder
 * 2. Update src/pages/index.astro line:
 *    <Hero videoSrc="/videos/your-video.mp4" />
 * 3. Supported formats: MP4, WebM, OGV
 * 
 * OPTION 2: External URL
 * ======================
 * 1. Upload video to Cloudinary, Vimeo, or similar
 * 2. Copy the video URL
 * 3. Update src/pages/index.astro line:
 *    <Hero videoSrc="https://your-video-url.com/video.mp4" />
 * 
 * OPTION 3: Video with Fallback Image
 * ====================================
 * Edit src/components/Hero.astro to add poster image:
 * 
 * <video 
 *   src={videoSrc}
 *   class="hero-video"
 *   autoplay
 *   muted
 *   loop
 *   playsinline
 *   poster="/images/hero-poster.jpg"  // Add this line
 * ></video>
 * 
 * VIDEO OPTIMIZATION TIPS
 * =======================
 * - Keep file size < 50MB for web (compress with HandBrake)
 * - Use MP4 format for best browser support
 * - Optimize bitrate: 2-5 Mbps for 1080p
 * - Add poster image for faster loading appearance
 * - Use 16:9 aspect ratio
 * 
 * RESPONSIVE VIDEO
 * ================
 * The video automatically covers the full hero section
 * on all devices. The overlay ensures text readability.
 */

// Example: If adding video programmatically via JavaScript
export function addHeroVideo(videoUrl) {
  const video = document.querySelector('.hero-video');
  if (video && video.tagName === 'VIDEO') {
    video.src = videoUrl;
    video.play();
  }
}

// Example: Lazy load video on user interaction
export function lazyLoadVideo() {
  const video = document.querySelector('.hero-video');
  if (video) {
    setTimeout(() => {
      video.style.display = 'block';
    }, 500);
  }
}
