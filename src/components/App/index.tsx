import React from 'react'
import reactLogo from './images/react-logo.svg'
import tailwindLogo from './images/tailwind-logo.svg'
import './styles/index.scss'

type AppProps = {
    name: string
}

const App: React.FC<AppProps> = (props) => {
    const { name } = props

    return (
        <div className="App">
            <header className="App-header">
                <div className="w-full bg-gray-800">
                    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                        <div className="text-center pb-12">
                            <h2 className="text-base font-bold text-indigo-600">
                                We have the best equipment in the market
                            </h2>
                            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
                                Check our awesome team members
                            </h1>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
                                <div className="w-full h-80">
                                    <img
                                        className="object-center object-cover w-full h-full"
                                        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                                        alt="user"
                                    />
                                </div>
                            </div>
                            <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
                                <div className="w-full h-80">
                                    <img
                                        className="object-center object-cover w-full h-full"
                                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                                        alt="user"
                                    />
                                </div>
                            </div>
                            <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
                                <div className="w-full h-80">
                                    <img
                                        className="object-center object-cover w-full h-full"
                                        src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80"
                                        alt="user"
                                    />
                                </div>
                            </div>
                            <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
                                <div className="w-full h-80">
                                    <img
                                        className="object-center object-cover w-full h-full"
                                        src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80"
                                        alt="user"
                                    />
                                </div>
                            </div>
                            <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
                                <div className="w-full h-80">
                                    <img
                                        className="object-center object-cover w-full h-full"
                                        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                                        alt="user"
                                    />
                                </div>
                            </div>
                            <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
                                <div className="w-full h-80">
                                    <img
                                        className="object-center object-cover w-full h-full"
                                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                                        alt="user"
                                    />
                                </div>
                            </div>
                            <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
                                <div className="w-full h-80">
                                    <img
                                        className="object-center object-cover w-full h-full"
                                        src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80"
                                        alt="user"
                                    />
                                </div>
                            </div>
                            <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
                                <div className="w-full h-80">
                                    <img
                                        className="object-center object-cover w-full h-full"
                                        src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=686&q=80"
                                        alt="user"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
                    {name}
                </h2>
                <img src={reactLogo} className="App-logo" alt="logo" />
                <img src={tailwindLogo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/components/App/index.tsx</code> and save to
                    reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default App
