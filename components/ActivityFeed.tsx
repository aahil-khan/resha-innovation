'use client';

import { RECENT_ACTIVITIES } from '@/lib/constants';

export function ActivityFeed() {
  const actionEmoji: Record<string, string> = {
    'joined network': '✨',
    'processed batch': '⚙️',
    'initiated collection': '📦',
    'completed traceability': '✓',
  };

  return (
    <div className="bg-white rounded-lg border border-light-gray p-6">
      <h3 className="text-xl font-sans font-bold text-forest mb-6">Recent Activity</h3>

      <div className="space-y-4">
        {RECENT_ACTIVITIES.map((activity, index) => (
          <div
            key={activity.id}
            className="pb-4 border-b border-light-gray last:border-b-0 last:pb-0"
          >
            <div className="flex gap-4">
              {/* Timeline dot */}
              <div className="flex-shrink-0 mt-1">
                <div className="w-3 h-3 bg-saffron rounded-full" />
                {index < RECENT_ACTIVITIES.length - 1 && (
                  <div className="w-0.5 h-12 bg-light-gray ml-1.5" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-sans font-semibold text-forest text-sm">
                      {activity.institution}
                    </p>
                    <p className="text-xs text-dark-gray font-sans">
                      {actionEmoji[activity.action] || '•'} {activity.action}
                    </p>
                    <p className="text-xs text-dark-gray font-sans mt-1">
                      {activity.device_type}
                    </p>
                  </div>
                  <p className="text-xs text-dark-gray font-sans whitespace-nowrap ml-2">
                    {activity.timestamp}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 py-2 text-saffron font-sans font-semibold text-sm hover:text-forest transition-colors">
        View All Activities
      </button>
    </div>
  );
}
