import { useState } from 'react';
import { MessageSquare, Users, Server, TrendingUp, Send, Clock, Search, ExternalLink, Building2 } from 'lucide-react';

function App() {
  const [message, setMessage] = useState('');
  const [chatHistory] = useState([
    { id: 1, title: 'AI模型训练查询', time: '2小时前' },
    { id: 2, title: '数据分析报告', time: '5小时前' },
    { id: 3, title: '系统性能优化', time: '昨天' },
  ]);

  const [messages] = useState([
    { id: 1, type: 'user', content: '分析最新的系统性能数据' },
    { id: 2, type: 'assistant', content: '正在分析系统性能数据，已识别3个优化点...' },
  ]);

  const [newsItems] = useState([
    { id: 1, title: 'AI模型更新至v2.5版本', time: '1小时前', category: '系统更新' },
    { id: 2, title: '新增5家供应商接入平台', time: '3小时前', category: '业务动态' },
    { id: 3, title: '月度性能报告已生成', time: '5小时前', category: '报告' },
  ]);

  const [queryResults] = useState([
    {
      id: 1,
      type: 'product',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400',
      name: 'AI Cloud Computing Platform',
      company: 'TechCorp Solutions',
      companyLink: 'https://example.com/techcorp',
      price: '$2,999/月',
      description: '高性能云计算解决方案'
    },
    {
      id: 2,
      type: 'product',
      image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=400',
      name: 'Enterprise Data Analytics',
      company: 'DataFlow Inc',
      companyLink: 'https://example.com/dataflow',
      price: '$4,500/月',
      description: '企业级数据分析平台'
    },
    {
      id: 3,
      type: 'product',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400',
      name: 'Neural Network Framework',
      company: 'AI Dynamics',
      companyLink: 'https://example.com/aidynamics',
      price: '$1,899/月',
      description: '深度学习训练框架'
    }
  ]);

  return (
    <div className="min-h-screen bg-[#0a1628] text-cyan-400 font-sans overflow-hidden">
      {/* Status Bar */}
      <div className="border-b border-cyan-900/50 bg-gradient-to-r from-[#0a1628] via-[#0d1f3a] to-[#0a1628]">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-yellow-300"></div>
              </div>
              <span className="text-2xl font-bold text-cyan-300">FusionLink</span>
            </div>

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-cyan-950/30 rounded-lg border border-cyan-800/30">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-cyan-300">服务在线</span>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 bg-cyan-950/30 rounded-lg border border-cyan-800/30">
                <Users className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-cyan-300">在线:</span>
                <span className="text-sm font-bold text-cyan-100">1,247</span>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 bg-cyan-950/30 rounded-lg border border-cyan-800/30">
                <Server className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-cyan-300">供应商:</span>
                <span className="text-sm font-bold text-cyan-100">86</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-6 h-[calc(100vh-180px)]">
        <div className="grid grid-cols-12 gap-6 h-full">
          {/* Left Sidebar - History */}
          <div className="col-span-3 bg-gradient-to-b from-cyan-950/20 to-transparent border border-cyan-800/30 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-cyan-800/30">
              <Clock className="w-5 h-5 text-cyan-400" />
              <h2 className="text-lg font-semibold text-cyan-300">历史记录</h2>
            </div>

            <div className="space-y-2">
              {chatHistory.map((item) => (
                <div
                  key={item.id}
                  className="p-3 bg-cyan-950/30 hover:bg-cyan-900/40 border border-cyan-800/20 hover:border-cyan-600/50 rounded-lg cursor-pointer transition-all duration-200"
                >
                  <div className="flex items-start gap-2">
                    <MessageSquare className="w-4 h-4 text-cyan-500 mt-1 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-cyan-200 truncate">{item.title}</p>
                      <p className="text-xs text-cyan-600 mt-1">{item.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center - Chat Window */}
          <div className="col-span-6 flex flex-col">
            {/* Logo Background */}
            <div className="flex-1 bg-gradient-to-b from-cyan-950/10 to-transparent border border-cyan-800/30 rounded-lg backdrop-blur-sm relative overflow-hidden">
              {/* Background Logo */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5">
                <div className="relative">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-yellow-300"></div>
                  </div>
                  <div className="absolute inset-0 border-4 border-cyan-400 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-4 rounded-lg border ${
                          msg.type === 'user'
                            ? 'bg-cyan-900/40 border-cyan-700/50 text-cyan-100'
                            : 'bg-cyan-950/60 border-cyan-800/40 text-cyan-200'
                        }`}
                      >
                        {msg.content}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input */}
                <div className="p-4 border-t border-cyan-800/30">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="输入消息..."
                      className="flex-1 bg-cyan-950/40 border border-cyan-800/50 rounded-lg px-4 py-3 text-cyan-100 placeholder-cyan-700 focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600"
                    />
                    <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600 text-white rounded-lg transition-all duration-200 flex items-center gap-2 border border-cyan-500">
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Search & Results */}
          <div className="col-span-3 bg-gradient-to-b from-cyan-950/20 to-transparent border border-cyan-800/30 rounded-lg p-4 backdrop-blur-sm overflow-y-auto">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-cyan-800/30">
              <Search className="w-5 h-5 text-cyan-400" />
              <h2 className="text-lg font-semibold text-cyan-300">查询结果</h2>
            </div>

            <div className="space-y-4">
              {queryResults.map((result) => (
                <div
                  key={result.id}
                  className="bg-cyan-950/30 border border-cyan-800/20 rounded-lg overflow-hidden hover:border-cyan-600/50 transition-all duration-200 group"
                >
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={result.image}
                      alt={result.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] to-transparent"></div>
                  </div>

                  <div className="p-3">
                    <h3 className="text-sm font-semibold text-cyan-200 mb-2 line-clamp-1">
                      {result.name}
                    </h3>

                    <p className="text-xs text-cyan-400 mb-2 line-clamp-2">
                      {result.description}
                    </p>

                    <div className="flex items-center gap-1 mb-2">
                      <Building2 className="w-3 h-3 text-cyan-500" />
                      <a
                        href={result.companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-cyan-300 hover:text-cyan-100 transition-colors flex items-center gap-1 group/link"
                      >
                        {result.company}
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </a>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-cyan-800/30">
                      <span className="text-sm font-bold text-cyan-100">{result.price}</span>
                      <button className="text-xs px-3 py-1 bg-cyan-600/30 hover:bg-cyan-600/50 text-cyan-200 rounded border border-cyan-600/50 transition-all duration-200">
                        查看详情
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom News Feed */}
      <div className="border-t border-cyan-900/50 bg-gradient-to-r from-[#0a1628] via-[#0d1f3a] to-[#0a1628]">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-5 h-5 text-cyan-400" />
            <h3 className="text-sm font-semibold text-cyan-300">最新资讯</h3>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {newsItems.map((item) => (
              <div
                key={item.id}
                className="p-3 bg-cyan-950/30 border border-cyan-800/30 rounded-lg hover:border-cyan-600/50 transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-xs px-2 py-1 bg-cyan-900/50 text-cyan-300 rounded">
                    {item.category}
                  </span>
                  <span className="text-xs text-cyan-600">{item.time}</span>
                </div>
                <p className="text-sm text-cyan-200">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
