// src/components/ServerStats.jsx
import React, { useState, useEffect } from 'react';
import { UsersIcon, ServerIcon, ClockIcon } from '@heroicons/react/24/outline';

const ServerStats = () => {
  const [stats, setStats] = useState({
    players: 0,
    maxPlayers: 100,
    status: 'online',
    uptime: '24d 12h',
  });

  const [isLoading, setIsLoading] = useState(true);

  // Simulate fetching server stats
  useEffect(() => {
    const fetchStats = () => {
      // In a real implementation, this would be an API call
      const mockStats = {
        players: Math.floor(Math.random() * 50) + 20,
        maxPlayers: 100,
        status: Math.random() > 0.1 ? 'online' : 'offline',
        uptime: '24d 12h',
      };

      setStats(mockStats);
      setIsLoading(false);
    };

    fetchStats();
    const interval = setInterval(fetchStats, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    return status === 'online' ? 'bg-green-500' : 'bg-red-500';
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
      <div className="bg-black/40 backdrop-blur-md p-4 rounded-lg hover-glow">
        <div className="flex items-center justify-center space-x-3">
          <UsersIcon className="h-6 w-6 text-gray-400" />
          <div className="text-left">
            <div className="text-sm text-gray-400">Players Online</div>
            <div className="text-2xl font-bold">
              {isLoading ? (
                <div className="animate-pulse bg-gray-700 h-8 w-20 rounded" />
              ) : (
                <span className="text-glow">{`${stats.players}/${stats.maxPlayers}`}</span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black/40 backdrop-blur-md p-4 rounded-lg hover-glow">
        <div className="flex items-center justify-center space-x-3">
          <ServerIcon className="h-6 w-6 text-gray-400" />
          <div className="text-left">
            <div className="text-sm text-gray-400">Server Status</div>
            <div className="text-2xl font-bold flex items-center">
              {isLoading ? (
                <div className="animate-pulse bg-gray-700 h-8 w-20 rounded" />
              ) : (
                <>
                  <div className={`h-3 w-3 rounded-full ${getStatusColor(stats.status)} animate-pulse mr-2`} />
                  <span className="capitalize">{stats.status}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black/40 backdrop-blur-md p-4 rounded-lg hover-glow">
        <div className="flex items-center justify-center space-x-3">
          <ClockIcon className="h-6 w-6 text-gray-400" />
          <div className="text-left">
            <div className="text-sm text-gray-400">Server Uptime</div>
            <div className="text-2xl font-bold">
              {isLoading ? (
                <div className="animate-pulse bg-gray-700 h-8 w-20 rounded" />
              ) : (
                stats.uptime
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerStats;