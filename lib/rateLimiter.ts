type RateLimitEntry = {
  count: number;
  resetTime: number;
};

const rateLimitStore = new Map<string, RateLimitEntry>();

const MAX_REQUESTS = parseInt(process.env.RATE_LIMIT_MAX || "3");
const WINDOW_MS = parseInt(process.env.RATE_LIMIT_WINDOW_MS || "600000"); // 10 minutes

export function checkRateLimit(ip: string): {
  allowed: boolean;
  remaining: number;
  resetTime: number;
  retryAfter?: number;
} {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  // Clean up expired entries periodically
  if (entry && now > entry.resetTime) {
    rateLimitStore.delete(ip);
  }

  if (!entry) {
    // First request
    rateLimitStore.set(ip, {
      count: 1,
      resetTime: now + WINDOW_MS,
    });
    return {
      allowed: true,
      remaining: MAX_REQUESTS - 1,
      resetTime: now + WINDOW_MS,
    };
  }

  if (entry.count >= MAX_REQUESTS) {
    // Rate limit exceeded
    const retryAfter = Math.ceil((entry.resetTime - now) / 1000);
    return {
      allowed: false,
      remaining: 0,
      resetTime: entry.resetTime,
      retryAfter,
    };
  }

  // Increment count
  entry.count += 1;
  rateLimitStore.set(ip, entry);

  return {
    allowed: true,
    remaining: MAX_REQUESTS - entry.count,
    resetTime: entry.resetTime,
  };
}

export function getRateLimitStatus(ip: string) {
  const entry = rateLimitStore.get(ip);
  if (!entry) {
    return {
      remaining: MAX_REQUESTS,
      resetTime: Date.now() + WINDOW_MS,
    };
  }
  return {
    remaining: Math.max(0, MAX_REQUESTS - entry.count),
    resetTime: entry.resetTime,
  };
}
