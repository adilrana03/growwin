import React from 'react'
import logo from '../assets/logo.jpeg'
const Footer = () => {
    return (
        <div>
            <footer class="bg-white p-12 border-t border-gray-200">
                <div class="container mx-auto">

                    {/* <!-- Logo --> */}
                    <div class="mb-10 text-center flex justify-between gap-5 items-center">
                        <div>

                            <h1 className='font-sans text-6xl text-red-400'>Growwin</h1>
                        </div>
                        <div>

                            <img src={logo} alt="Deriv Logo" class="w-20 mx-auto mb-4 rounded-2xl shadow-2xl shadow-blue-400" />
                        </div>
                    </div>

                    {/* <!-- Main Footer Sections --> */}
                    <div class="md:grid md:grid-cols-5 md:gap-16 grid grid-cols-2 gap-16 mb-8">
                        {/* <!-- About Us --> */}
                        <div>
                            <h4 class="font-bold mb-4">ABOUT US</h4>
                            <ul class="space-y-2">
                                <li><a href="#" class="text-gray-600 hover:text-black">Who we are</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-black">Why chooose us </a></li>
                                <li><a href="#" class="text-gray-600 hover:text-black">Principles</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-black">Contact</a></li>

                                {/* <!-- ... Other items ... --> */}
                            </ul>
                        </div>

                        {/* <!-- Trade Types --> */}
                        <div>
                            <h4 class="font-bold mb-4">TRADE TYPES</h4>
                            <ul class="space-y-2">
                                <li><a href="#" class="text-gray-600 hover:text-black">CFDs</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-black">Options</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-black">Multiplayer</a></li>

                                {/* <!-- ... Other items ... --> */}
                            </ul>
                        </div>

                        {/* Market */}

                        <div>
                            <h4 class="font-bold mb-4">Market</h4>
                            <ul class="space-y-2">
                                <li><a href="#" class="text-gray-600 hover:text-black">Forex</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-black">ETF</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-black">Stocks</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-black">Cryptocurrencies</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-black">Commudities</a></li>


                                {/* <!-- ... Other items ... --> */}
                            </ul>
                        </div>

                        {/* <!-- Other sections go here... --> */}
                        <div>
                            <h4 class="font-bold mb-4">Platforms</h4>
                            <ul class="space-y-2">
                                <li><a href="#" class="text-gray-600 hover:text-black">Growwin X</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-black">Growwin Trade</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-black">Growwin Bot</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-black">Cryptocurrencies</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-black">Commudities</a></li>

                            </ul>
                        </div>


                        {/* <!-- ... Other items ... --> */}
                        <div>
                            <h4 class="font-bold mb-4">Partners</h4>
                            <ul class="space-y-2">
                                <li><a href="#" class="text-gray-600 hover:text-black">Growwin X</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-black">Growwin Trade</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-black">Growwin Bot</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-black">Cryptocurrencies</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-black">Commudities</a></li>

                            </ul>
                        </div>
                    </div>

                    {/* <!-- Legal Info & Disclaimer --> */}
                    <div class="mb-6 text-sm text-gray-600">
                        <p>Growwin (FX) Ltd is licensed by...</p>
                        {/* <!-- ... Other paragraphs ... --> */}
                    </div>

                    {/* <!-- Social Media Icons --> */}
                    <div class="flex justify-center space-x-6 mb-4">
                        <a href=""><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI0LjA4MSAwLjAwNjY1ODE0TDE5LjkyMzUgMEMxNS4yNTI3IDAgMTIuMjM0MyAzLjA5MTA0IDEyLjIzNDMgNy44NzUyNFYxMS41MDYzSDguMDU0MTFDNy42OTI5IDExLjUwNjMgNy40MDAzOSAxMS43OTg1IDcuNDAwMzkgMTIuMTU5MVYxNy40MkM3LjQwMDM5IDE3Ljc4MDYgNy42OTMyMyAxOC4wNzI1IDguMDU0MTEgMTguMDcyNUgxMi4yMzQzVjMxLjM0NzVDMTIuMjM0MyAzMS43MDggMTIuNTI2OCAzMiAxMi44ODggMzJIMTguMzQxOUMxOC43MDMxIDMyIDE4Ljk5NTYgMzEuNzA3NyAxOC45OTU2IDMxLjM0NzVWMTguMDcyNUgyMy44ODMyQzI0LjI0NDQgMTguMDcyNSAyNC41MzY5IDE3Ljc4MDYgMjQuNTM2OSAxNy40MkwyNC41Mzg5IDEyLjE1OTFDMjQuNTM4OSAxMS45ODYgMjQuNDY5OSAxMS44MjAyIDI0LjM0NzUgMTEuNjk3N0MyNC4yMjUxIDExLjU3NTIgMjQuMDU4MyAxMS41MDYzIDIzLjg4NDkgMTEuNTA2M0gxOC45OTU2VjguNDI4MkMxOC45OTU2IDYuOTQ4NzYgMTkuMzQ4OCA2LjE5NzczIDIxLjI3OTcgNi4xOTc3M0wyNC4wODAzIDYuMTk2NzNDMjQuNDQxMiA2LjE5NjczIDI0LjczMzcgNS45MDQ0MyAyNC43MzM3IDUuNTQ0MjNWMC42NTkxNTVDMjQuNzMzNyAwLjI5OTI4MyAyNC40NDE1IDAuMDA3MzIzOTUgMjQuMDgxIDAuMDA2NjU4MTRaIiBmaWxsPSIjNDE0NjUyIiBmaWxsLW9wYWNpdHk9IjAuOCIvPgo8L3N2Zz4K" alt="Facebook" class="w-6" /></a>
                        <a href=""><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzI4MTFfMjA4OTMpIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LjgzMDY1IDBIMjMuMTY5QzI4LjAzODYgMCAzMi4wMDAyIDMuOTYxNjIgMzIgOC44MzA4NFYyMy4xNjkyQzMyIDI4LjAzODQgMjguMDM4NiAzMiAyMy4xNjkgMzJIOC44MzA2NUMzLjk2MTQzIDMyIDAgMjguMDM4NiAwIDIzLjE2OTJWOC44MzA4NEMwIDMuOTYxNjIgMy45NjE0MyAwIDguODMwNjUgMFpNMjMuMTY4NiAyOS4xNjA4QzI2LjQ3MjUgMjkuMTYwOCAyOS4xNjA0IDI2LjQ3MzEgMjkuMTYwNCAyMy4xNjkySDI5LjE2MDJWOC44MzA4OEMyOS4xNjAyIDUuNTI3MTkgMjYuNDcyMyAyLjgzOTIzIDIzLjE2ODQgMi44MzkyM0g4LjgzMDA4QzUuNTI2MzkgMi44MzkyMyAyLjgzODYyIDUuNTI3MTkgMi44Mzg2MiA4LjgzMDg4VjIzLjE2OTJDMi44Mzg2MiAyNi40NzMxIDUuNTI2MzkgMjkuMTYxIDguODMwMDggMjkuMTYwOEgyMy4xNjg2Wk03LjYxOTYzIDE2LjAwMDJDNy42MTk2MyAxMS4zNzg3IDExLjM3OTMgNy42MTkwMiAxNi4wMDA2IDcuNjE5MDJDMjAuNjIxOSA3LjYxOTAyIDI0LjM4MTUgMTEuMzc4NyAyNC4zODE1IDE2LjAwMDJDMjQuMzgxNSAyMC42MjE0IDIwLjYyMTkgMjQuMzgwOSAxNi4wMDA2IDI0LjM4MDlDMTEuMzc5MyAyNC4zODA5IDcuNjE5NjMgMjAuNjIxNCA3LjYxOTYzIDE2LjAwMDJaTTEwLjUwNDkgMTUuOTk5OUMxMC41MDQ5IDE5LjAyOTkgMTIuOTcwMSAyMS40OTQ4IDE2IDIxLjQ5NDhDMTkuMDI5OSAyMS40OTQ4IDIxLjQ5NTIgMTkuMDI5OSAyMS40OTUyIDE1Ljk5OTlDMjEuNDk1MiAxMi45Njk3IDE5LjAzMDEgMTAuNTA0NiAxNiAxMC41MDQ2QzEyLjk2OTkgMTAuNTA0NiAxMC41MDQ5IDEyLjk2OTcgMTAuNTA0OSAxNS45OTk5Wk0yMy40MTYyIDUuODkwOTVDMjMuNzY5NyA1LjUzNTk3IDI0LjI2MTMgNS4zMzMzNyAyNC43NjE3IDUuMzMzMzdDMjUuMjYzOSA1LjMzMzM3IDI1Ljc1NTYgNS41MzU5NyAyNi4xMDg5IDUuODkwOTVDMjYuNDYzOSA2LjI0NDIgMjYuNjY2NSA2LjczNTk3IDI2LjY2NjUgNy4yMzgxNEMyNi42NjY1IDcuNzM4NTcgMjYuNDYzOSA4LjIzMDM0IDI2LjEwODkgOC41ODUzMkMyNS43NTM5IDguOTM4NTcgMjUuMjYzOSA5LjE0MjkgMjQuNzYxNyA5LjE0MjlDMjQuMjYxMyA5LjE0MjkgMjMuNzY5NSA4LjkzODU3IDIzLjQxNjIgOC41ODUzMkMyMy4wNjEzIDguMjMwMzQgMjIuODU2OSA3LjczODc0IDIyLjg1NjkgNy4yMzgxNEMyMi44NTY5IDYuNzM1OTcgMjMuMDYxMSA2LjI0NDIgMjMuNDE2MiA1Ljg5MDk1WiIgZmlsbD0iIzQxNDY1MiIgZmlsbC1vcGFjaXR5PSIwLjgiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8yODExXzIwODkzIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=" alt="Instagram" class="w-6" /></a>
                        <a href=""><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMyIDUuNzU2NTNDMzAuODEgNi4yOTE5MiAyOS41NDIgNi42NDY3OSAyOC4yMiA2LjgxOTFDMjkuNTggNS45ODYyOCAzMC42MTggNC42Nzc1NiAzMS4xMDYgMy4xMDAxMkMyOS44MzggMy44NzU1MSAyOC40MzggNC40MjMyIDI2Ljk0NiA0LjcyODg0QzI1Ljc0MiAzLjQxMzk3IDI0LjAyNiAyLjU5OTYxIDIyLjE1NCAyLjU5OTYxQzE4LjUyMiAyLjU5OTYxIDE1LjU5OCA1LjYyMzIgMTUuNTk4IDkuMzI5ODdDMTUuNTk4IDkuODYzMiAxNS42NDIgMTAuMzc2IDE1Ljc1IDEwLjg2NDJDMTAuMjk2IDEwLjU5MTQgNS40NyA3LjkxMDM4IDIuMjI4IDMuODI2MjhDMS42NjIgNC44MzM0NiAxLjMzIDUuOTg2MjggMS4zMyA3LjIyNzNDMS4zMyA5LjU1NzU2IDIuNSAxMS42MjMyIDQuMjQ0IDEyLjgxOTFDMy4xOSAxMi43OTg2IDIuMTU2IDEyLjQ4NDcgMS4yOCAxMS45OTA0QzEuMjggMTIuMDEwOSAxLjI4IDEyLjAzNzYgMS4yOCAxMi4wNjQyQzEuMjggMTUuMzM0IDMuNTU0IDE4LjA0OTkgNi41MzYgMTguNjc1NUM2LjAwMiAxOC44MjUzIDUuNDIgMTguODk3IDQuODE2IDE4Ljg5N0M0LjM5NiAxOC44OTcgMy45NzIgMTguODcyNCAzLjU3NCAxOC43ODIyQzQuNDI0IDIxLjQ0NjggNi44MzYgMjMuNDA1OCA5LjcwNCAyMy40Njk0QzcuNDcyIDI1LjI2MDEgNC42MzggMjYuMzM5MSAxLjU3IDI2LjMzOTFDMS4wMzIgMjYuMzM5MSAwLjUxNiAyNi4zMTQ1IDAgMjYuMjQ2OEMyLjkwNiAyOC4xNjg4IDYuMzUgMjkuMjY2MyAxMC4wNjQgMjkuMjY2M0MyMi4xMzYgMjkuMjY2MyAyOC43MzYgMTkuMDA5OSAyOC43MzYgMTAuMTE5NkMyOC43MzYgOS44MjIxNyAyOC43MjYgOS41MzQ5OSAyOC43MTIgOS4yNDk4N0MzMC4wMTQgOC4zMDIxNyAzMS4xMDggNy4xMTg1OCAzMiA1Ljc1NjUzWiIgZmlsbD0iIzQxNDY1MiIgZmlsbC1vcGFjaXR5PSIwLjgiLz4KPC9zdmc+Cg==" alt="Instagram" class="w-6" /></a>
                        <a href=""><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMxLjUxNjYgMi45NDM2NEMzMS4xNjMgMi42NTYzNSAzMC42MjAzIDIuNTk0OTYgMzAuMzc0OCAyLjU5OTg3QzI5LjI2NzMgMi42MTk1MiAyNy41NjU3IDMuMjExMjkgMTkuMzg0IDYuNjE0NkMxNi41MTYgNy44MDU1MiAxMC43ODk4IDEwLjI3MzMgMi4yMDA1IDE0LjAxNTVDMC44MDU3ODYgMTQuNTcwNCAwLjA3NDA1MDkgMTUuMTEzMSAwLjAwNzc1Mjc1IDE1LjY0MzRDLTAuMTA0NTUyIDE2LjUzOTcgMS4wMTU5NiAxNi44OTI3IDIuNTQzOTQgMTcuMzc0MUMyLjc1MzIgMTcuNDQgMi45NzAxIDE3LjUwODQgMy4xOTI1MiAxNy41ODA4QzQuNjk3NzMgMTguMDY5NSA2LjcyMTA1IDE4LjY0MTYgNy43NzIgMTguNjYxMkM4LjcyNzE5IDE4LjY4NTggOS43OTA0MSAxOC4yOTI5IDEwLjk2OSAxNy40ODI2QzE4Ljk5MzYgMTIuMDY4MiAyMy4xMzYgOS4zMjc5MiAyMy4zOTYzIDkuMjY4OTlDMjMuNTgwNCA5LjIyNzI0IDIzLjgzNTggOS4xNzU2OCAyNC4wMDc3IDkuMzI3OTJDMjQuMTc5NiA5LjQ4MDE2IDI0LjE2MjQgOS43Njk5MSAyNC4xNDUyIDkuODQ4NDhDMjQuMDMzIDEwLjMyMTQgMTkuNjM4MSAxNC40MDgzIDE3LjM1NCAxNi41MzI0QzE2LjYzNzUgMTcuMTk4NyAxNi4xMjg3IDE3LjY3MTggMTYuMDI0OSAxNy43Nzk3QzE1Ljc5NDggMTguMDE4MyAxNS41NjA0IDE4LjI0NDEgMTUuMzM1IDE4LjQ2MTJDMTMuOTM2MyAxOS44MDgyIDEyLjg4NTUgMjAuODIwMyAxNS4zOTE0IDIyLjQ2OTdDMTYuNTk2NSAyMy4yNjQ1IDE3LjU2MDcgMjMuOTIxNCAxOC41MjMxIDI0LjU3N0MxOS41NzA1IDI1LjI5MDYgMjAuNjE1OCAyNi4wMDI3IDIxLjk2NzIgMjYuODg5NkMyMi4zMTMyIDI3LjExNjIgMjIuNjQzNSAyNy4zNTE2IDIyLjk2NTMgMjcuNTgwOUMyNC4xODQ4IDI4LjQ1IDI1LjI4MDMgMjkuMjMwNyAyNi42MzI2IDI5LjEwNDRDMjcuNDIwOCAyOS4wMzMyIDI4LjIzMzYgMjguMjk0MSAyOC42NDYxIDI2LjA4NDJDMjkuNjIzNCAyMC44NjYzIDMxLjU0MzYgOS41NjExOSAzMS45ODU2IDQuOTAwNjdDMzIuMDI0OCA0LjQ5MzA2IDMxLjk3NTcgMy45NzAwNCAzMS45MzY0IDMuNzQxNjhDMzEuOTAxNCAzLjQzMjQ3IDMxLjc1MTUgMy4xNDc2OSAzMS41MTY2IDIuOTQzNjRaIiBmaWxsPSIjNDE0NjUyIiBmaWxsLW9wYWNpdHk9IjAuOCIvPgo8L3N2Zz4K" alt="Instagram" class="w-6" /></a>

                        {/* <!-- ... Other icons ... --> */}
                    </div>

                    {/* <!-- Disclaimer --> */}
                    <div class="text-xs text-gray-500 text-center">
                        <p>CFDs and other products offered on this website are complex instruments...</p>
                        {/* <!-- ... --> */}
                    </div>
                </div>
            </footer>


        </div>
    )
}

export default Footer