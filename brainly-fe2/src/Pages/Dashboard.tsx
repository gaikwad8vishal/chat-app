import { TwitterIcon } from "../Icons/TwitterIcon";
import { RightArrow } from "../Icons/rightArrrow";
import { Button  } from "../component/button";





export function Dashboard() {
  return <div className="min-h-screen bg-white">
        <nav className="fixed w-full bg-white-80  backdrop-blur-md z-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 border shadow-md sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center gap-2">
                <TwitterIcon />
                <span className="text-xl font-semibold">
                  Second Brain
                </span>
              </div>
              <div className="flex items-center gap-6">
                <a href="/SignIn" >
                  <div>
                    <Button variant="secondary" size="md" text="Log In" />
                  </div>  
                </a>
                <a href="/SignUp" >
                  <div>
                    <Button variant="secondary" size="md" text="Get started"/>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center ">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Your Digital Second Brain for
                <span className="text-indigo-600 pl-2">Everything</span>
               </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Capture, organize, and never lose your valuable content. From tweets to documents, everything in one place.
              </p>
              <div className="flex gap-4 justify-center">
                <a href="SignUp">
                  <Button variant="secondary" size="lg" text="Get Started free" endIcon={<RightArrow/>} />
                </a>
              </div>
            </div>
          <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <img src="https://second-brain-rust.vercel.app/assets/Dashboarddemo-KgAoZpp3.png" />
          </div>
          </div>



        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything you need in one place</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Powerful features to help you capture and organize your digital life.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
                  <TwitterIcon/>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Smart Organization
                </h3>
                <p className="text-gray-600">
                Automatically categorize and tag your content for easy retrieval.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
                  <TwitterIcon/>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Youtube and Twitter
                </h3>
                <p className="text-gray-600">Find anything in seconds with Embeddings</p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <div>
                  <TwitterIcon/>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Save Anything
                </h3>
                <p className="text-gray-600">
                Save content from anywhere
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to organize your digital life?</h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">Join thousands of users who have transformed their productivity with Second Brain.</p>
            <div className="flex justify-center">
              <a href="SignIn" >
                <Button variant="secondary" size="lg" text="Get Started Now"  endIcon={<RightArrow/>}/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                  <TwitterIcon/>
              </div>
              <span className="font-semibold">Second Brain</span>
              <p className="text-gray-600 text-sm">Your digital life, organized.</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p>  Designed and Developed by The Vishal Gaikwad</p>
          </div>
        </div>
      </footer>
  </div>
}


