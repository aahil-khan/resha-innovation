import { RECENT_ACTIVITIES } from '@/lib/constants';

export function ActivityFeed() {
  return (
    <div className="sacred-card p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-forest" style={{ fontFamily: 'DM Serif Display, serif' }}>
          Recent Activity
        </h3>
        <span className="text-xs text-saffron font-semibold uppercase tracking-wider">Live</span>
      </div>

      <div className="space-y-3">
        {RECENT_ACTIVITIES.map((activity) => (
          <div
            key={activity.id}
            className="flex gap-3 p-3 rounded-xl hover:bg-parchment-dark transition-colors duration-200"
          >
            <div className="text-xl flex-shrink-0 mt-0.5">{activity.icon}</div>
            <div className="flex-1 min-w-0">
              <p className="text-forest text-sm font-semibold truncate">{activity.text}</p>
              <p className="text-dark-gray text-xs truncate mt-0.5">{activity.detail}</p>
            </div>
            <div className="text-xs text-dark-gray/60 flex-shrink-0 whitespace-nowrap pt-0.5">
              {activity.timestamp}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
