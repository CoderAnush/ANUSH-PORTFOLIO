'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send } from 'lucide-react'

const quickActions = [
  { label: 'View Projects', action: '/projects' },
  { label: 'See Resume', action: '/resume' },
  { label: 'Contact Me', action: '/contact' },
]

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleQuickAction = (action: string) => {
    window.location.href = action
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-skyBlue hover:bg-accent rounded-full shadow-glow flex items-center justify-center transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X className="w-6 h-6 text-navy" /> : <MessageCircle className="w-6 h-6 text-navy" />}
      </motion.button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-charcoal border border-slate rounded-lg shadow-xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-navy p-4 border-b border-slate">
              <h3 className="text-white font-bold text-lg">AI Assistant</h3>
              <p className="text-gray text-sm">Ask me about Anush's work</p>
            </div>

            {/* Quick Actions */}
            <div className="p-4 space-y-3">
              <p className="text-gray text-sm mb-2">Quick actions:</p>
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickAction(action.action)}
                  className="w-full text-left px-4 py-3 bg-navy hover:bg-slate border border-slate hover:border-skyBlue rounded-lg text-white transition-all"
                >
                  {action.label}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-slate">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your question..."
                  className="flex-1 px-4 py-2 bg-navy border border-slate rounded-lg text-white placeholder-gray focus:outline-none focus:border-skyBlue"
                />
                <button
                  disabled
                  className="px-4 py-2 bg-skyBlue/50 text-navy rounded-lg cursor-not-allowed"
                  title="AI chat feature coming soon"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <p className="text-gray text-xs mt-2 text-center">
                Interactive AI chat coming soon!
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
