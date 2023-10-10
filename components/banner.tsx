'use client'

import { useState } from 'react'

export default function Banner() {
  const [bannerOpen, setBannerOpen] = useState<boolean>(true)

  return (
    <>
      {bannerOpen && (
        <div className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-50">
          <div className="bg-slate-800 text-slate-50 text-sm p-3 md:rounded shadow-lg flex justify-between items-center">
            <p className="text-slate-500">This website uses cookies for a better experience.</p>
            <button className="bg-emerald-400 text-slate-800 hover:bg-emerald-300 px-3 py-1 md:px-4 md:py-2 rounded-lg font-medium" onClick={() => setBannerOpen(false)}>
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  )
}
