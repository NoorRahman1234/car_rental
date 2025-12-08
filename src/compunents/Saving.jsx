import React from 'react'
import Availibilityimage from '../assets/Herosection/Availibilityimage.png'
import comfortcar from '../assets/Herosection/comfortcar.png'
import wallet from '../assets/Herosection/wallet.png'

function Saving() {
  return (
            <div className="w-full py-20 bg-white">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3  text-center gap-28 -px-46">
                    {/* Availability */}
                    <div className="flex flex-col items-center">
                        <img src={Availibilityimage} alt="" />
                        <h3 className="text-xl font-bold mb-3">Availability</h3>
                        <p className="text-black-800 max-w-xs">
                            Diam tincidunt tincidunt erat at semper <br /> fermentum. Id ultricies quis
                        </p>
                    </div>

                    {/* Comfort */}
                    <div className="flex flex-col items-center">
                        <img src={comfortcar} alt="" />
                        <h3 className="text-xl font-bold mb-3">Comfort</h3>
                        <p className="text-black-800 max-w-xs">
                            Gravida auctor fermentum morbi vulputate ac egestas orci etium convallis
                        </p>
                    </div>

                    {/* Savings */}
                    <div className="flex flex-col items-center">
                        <img src={wallet} alt="" />
                        <h3 className="text-xl font-bold mb-3">Savings</h3>
                        <p className="text-black-800 max-w-xs">
                            Pretium convallis id diam sed commodo vestibulum lobortis volutpat
                        </p>
                    </div>
                </div>
            </div>
  )
}

export default Saving;





