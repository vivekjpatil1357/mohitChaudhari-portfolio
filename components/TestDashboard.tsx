'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
} from 'chart.js';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
// import Image from 'next/image'; // Assuming Image might be an issue if not used or configured.

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

export default function TestDashboard() {
  // TVS Motors consumer data
  const tvsData = {
    genderDistribution: {
      male: 78,
      female: 22
    },
    ageDistribution: {
      young: 56, // 18-30 years
      middle: 29, // 30-40 years
      older: 15  // Above 40 years
    },
    decisionFactors: {
      brandLoyalty: 45,
      price: 20,
      performance: 25,
      looks: 10
    },
    influencers: {
      dealers: 15,
      friends: 10,
      media: 35,
      family: 5,
      collective: 35
    },
    salesTrend: {
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      values: [35, 42, 50, 47, 55, 60]
    }
  };

  // Data for gender distribution doughnut chart
  const genderData = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        data: [tvsData.genderDistribution.male, tvsData.genderDistribution.female],
        backgroundColor: ['#0055FF', '#EB4E85'],
        borderColor: ['#0055FF', '#EB4E85'],
        borderWidth: 1,
      },
    ],
  };

  // Data for age distribution bar chart
  const ageData = {
    labels: ['18-30 years', '30-40 years', 'Above 40 years'],
    datasets: [
      {
        label: 'Age Distribution',
        data: [tvsData.ageDistribution.young, tvsData.ageDistribution.middle, tvsData.ageDistribution.older],
        backgroundColor: ['#0055FF', '#3d7eff', '#95F1D5'],
        borderColor: ['#0055FF', '#3d7eff', '#95F1D5'],
        borderWidth: 1,
      },
    ],
  };

  // Data for decision factors bar chart
  const decisionFactorsData = {
    labels: ['Brand Loyalty', 'Price', 'Performance', 'Looks'],
    datasets: [
      {
        label: 'Decision Factors',
        data: [
          tvsData.decisionFactors.brandLoyalty, 
          tvsData.decisionFactors.price,
          tvsData.decisionFactors.performance,
          tvsData.decisionFactors.looks
        ],
        backgroundColor: '#0055FF',
        borderColor: '#0055FF',
        borderWidth: 1,
      },
    ],
  };
  // Data for influencers doughnut chart
  const influencersData = {
    labels: ['Media', 'Collectively', 'Dealers', 'Friends', 'Family Members'],
    datasets: [
      {
        data: [
          tvsData.influencers.media, 
          tvsData.influencers.collective,
          tvsData.influencers.dealers,
          tvsData.influencers.friends,
          tvsData.influencers.family
        ],
        backgroundColor: ['#0055FF', '#3d7eff', '#95F1D5', '#4ED8EB', '#EB4E85'],
        borderColor: ['#0055FF', '#3d7eff', '#95F1D5', '#4ED8EB', '#EB4E85'],
        borderWidth: 1,
      },
    ],
  };

  // Data for sales trend line chart
  const salesTrendData = {
    labels: tvsData.salesTrend.months,
    datasets: [
      {
        label: 'Sales Trend (in thousands)',
        data: tvsData.salesTrend.values,
        borderColor: '#0055FF',
        backgroundColor: 'rgba(0, 85, 255, 0.1)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#0055FF',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function(value: any) {
            return value + '%';
          }
        }
      },
      x: {
        grid: {
          display: false,
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },      tooltip: {
        callbacks: {
          label: function(context: any) {
            return context.parsed.y + '%';
          }
        }
      }
    },
  };
  
  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          boxWidth: 10,
          padding: 15,
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return context.label + ': ' + context.parsed + '%';
          }
        }
      }
    },
    cutout: '65%',
  };
  
  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          callback: function(value: any) {
            return value + 'k';
          }
        }
      },
      x: {
        grid: {
          display: false,
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        titleFont: {
          size: 14,
          weight: 'bold' as const,
        },
        bodyFont: {
          size: 13,
        },
        callbacks: {
          label: function(context: any) {
            return context.parsed.y + 'k units';
          }
        }
      }
    }
  };

  return (
    <div className="rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-xl">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0055FF] to-[#95F1D5] p-6">
        <div className="flex items-center gap-4">
          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L14.8 8.6L22 9.3L17 14.4L18.2 22L12 18.4L5.8 22L7 14.4L2 9.3L9.2 8.6L12 2Z" fill="white" />
            </svg>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-white">TVS Motors Consumer Analysis</h2>
        </div>
      </div>

      {/* Main content */}
      <div className="p-6">
        {/* Top metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl p-4 shadow-md border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Male Consumers</h3>
            <p className="text-3xl font-bold text-[#0055FF] dark:text-[#3d7eff]">78%</p>
            <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">Majority of customer base</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl p-4 shadow-md border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Age 18-30</h3>
            <p className="text-3xl font-bold text-[#0055FF] dark:text-[#3d7eff]">56%</p>
            <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">Young adults segment</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl p-4 shadow-md border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Brand Loyalty</h3>
            <p className="text-3xl font-bold text-[#0055FF] dark:text-[#3d7eff]">45%</p>
            <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">Top decision factor</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl p-4 shadow-md border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Media Influence</h3>
            <p className="text-3xl font-bold text-[#0055FF] dark:text-[#3d7eff]">35%</p>
            <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">Top purchase influencer</p>
          </motion.div>        </div>

        {/* Sales Trend Chart - Full Width */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-md border border-gray-100 dark:border-gray-700 mb-6"
        >
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">TVS Motors Sales Trend (H1 2025)</h3>
          <div className="h-72">
            <Line data={salesTrendData} options={lineOptions} />
          </div>
          <div className="mt-4 text-sm text-center text-gray-600 dark:text-gray-300">
            <p>Interpretation – The first half of 2025 shows consistent growth in TVS Motors sales with a peak in June</p>
          </div>
        </motion.div>

        {/* Charts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Gender Distribution */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-md border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Gender Distribution</h3>
            <div className="flex items-center">
              <div className="h-48 w-48 mx-auto">
                <Doughnut data={genderData} options={doughnutOptions} />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-center">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded-lg">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Male</p>
                <p className="text-xl font-bold text-[#0055FF] dark:text-[#3d7eff]">78%</p>
              </div>
              <div className="bg-pink-50 dark:bg-pink-900/20 p-2 rounded-lg">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Female</p>
                <p className="text-xl font-bold text-[#EB4E85] dark:text-pink-400">22%</p>
              </div>
            </div>
          </motion.div>

          {/* Age Distribution */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-md border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Age Distribution</h3>
            <div className="h-60">
              <Bar data={ageData} options={barOptions} />
            </div>
            <div className="mt-4 text-sm text-center text-gray-600 dark:text-gray-300">
              <p>Interpretation – from sample 56% of the consumers of age group of 18 – 30 years possess TVS Motor</p>
            </div>
          </motion.div>

          {/* Decision Factors */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-md border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Decision Factors</h3>
            <div className="h-60">
              <Bar data={decisionFactorsData} options={barOptions} />
            </div>
            <div className="mt-4 text-sm text-center text-gray-600 dark:text-gray-300">
              <p>Interpretation – Consumers prefer brand loyalty more than price and looks while making buying decision.</p>
            </div>
          </motion.div>

          {/* Purchase Influencers */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-md border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Purchase Influencers</h3>
            <div className="h-60">
              <Doughnut data={influencersData} options={doughnutOptions} />
            </div>
            <div className="mt-4 text-sm text-center text-gray-600 dark:text-gray-300">
              <p>Interpretation – In the case of factor influencing purchase decision, Media plays important role.</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Based on a comprehensive market research study conducted for TVS Motors from 2023-2024
          </p>
          
        </div>      </div>
    </div>
  );
}
