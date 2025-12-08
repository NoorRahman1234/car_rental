import React from 'react'
import blurimage from '../assets/Herosection/blurimage.png'
import owner from '../assets/Herosection/Owner.jpg'


function infosection() {
  return (
  <>
              <div className="w-full py-20 bg-white -mt-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 -mr-6 md:grid-cols-2 gap-38 px-6 items-center">
                    {/* Left Image */}
                    <div>
                        <img
                            src={owner}
                            alt="Car"
                            className="w-full h-[420px] object-cover rounded-2xl shadow-md"
                        />
                    </div>
                    {/* Right Text List */}
                    <div className="space-y-8 ">

                        {/* Item 1 */}
                        <div className="flex gap-4">
                            <div className="bg-[#5937E0] text-white w-8 h-8 flex items-left justify-center rounded-full">1</div>
                            <div>
                                <h3 className="text-lg font-bold mb-1 text-left">Erat at semper</h3>
                                <p className="text-gray-600 text-sm max-w-md text-left">
                                    Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum…
                                </p>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="flex gap-4">
                            <div className="bg-[#5937E0] text-white w-8 h-8 flex items-center justify-center rounded-full">2</div>
                            <div>
                                <h3 className="text-lg font-bold mb-1 text-left">Urna nec vivamus risus duis arcu</h3>
                                <p className="text-gray-600 text-sm max-w-md text-left">
                                    Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper
                                </p>
                            </div>
                        </div>

                        {/* Item 3 */}
                        <div className="flex gap-4">
                            <div className="bg-[#5937E0] text-white w-8 h-8 flex items-center justify-center rounded-full">3</div>
                            <div>
                                <h3 className="text-lg font-bold mb-1 text-left">Lobortis euismod imperdiet tempus</h3>
                                <p className="text-gray-600 text-sm max-w-md text-left">
                                    Viverra scelerisque mauris et nullam molestie et. Augue adipiscing praesent nisl cras nunc luctus viverra nisi
                                </p>
                            </div>
                        </div>

                        {/* Item 4 */}
                        <div className="flex gap-4">
                            <div className="bg-[#5937E0] text-white w-8 h-8 flex items-center justify-center rounded-full">4</div>
                            <div>
                                <h3 className="text-lg font-bold mb-1 text-left">Cras nulla aliquet nam eleifend amet et</h3>
                                <p className="text-gray-600 text-sm max-w-md text-left">
                                    Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper sed integer.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

  </>
  

             
  )
}

export default infosection;
