import { RECENT_ACTIVITIES } from '@/lib/constants';
import { ICON_MAP } from './Icons';

export function ActivityFeed() {
  const iconColors: Record<string, string> = {
    Check: '#1B5E3B',
    Refresh: '#E87722',
    Clipboard: '#4A4A4A',
    Settings: '#7B1C1C',
    Package: '#E87722',
    Leaf: '#1B5E3B',
  };

  return (
    <div className="sacred-card p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-forest" style={{ fontFamily: 'DM Serif Display, serif' }}>
          Recent Activity
        </h3>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"/>
          <span className="text-xs text-saffron font-semibold uppercase tracking-wider">Live</span>
        </div>
      </div>

      <div className="space-y-2">
        {RECENT_ACTIVITIES.map((activity) => {
          const IconComponent = ICON_MAP[activity.icon];
          const iconColor = iconColors[activity.icon] || '#1B5E3B';
          return (
            <div key={activity.id} className="flex gap-3 p-3 rounded-xl hover:bg-parchment transition-colors duration-200">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${iconColor}14` }}>
                {IconComponent && <IconComponent size={15} color={iconColor} />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-forest text-sm font-semibold truncate">{activity.text}</p>
                <p className="text-dark-gray text-xs truncate mt-0.5">{activity.detail}</p>
              </div>
              <div className="text-xs text-dark-gray/60 flex-shrink-0 whitespace-nowrap pt-0.5">
                {activity.timestamp}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
