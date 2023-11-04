import React from 'react';

const SignupComponent = () => {
    return (
        <div className="md:flex mx-auto  bg-red-500 p-12 h-[400px] py-20 mt-20 mb-40 w-[85%] rounded-2xl">
            <div className=" lg:flex flex-col justify-center lg:h-[400px] lg:p-12 p-5 lg:w-[40%] bg-white rounded-lg border ">
                <h2 className="text-3xl font-bold mb-4 ">Join over 2.5 million traders worldwide</h2>
                <p className="text-lg mb-6 ">Sign up for your demo account now.</p>
                <input
                    type="email"
                    placeholder="Email address"
                    className="mb-4 p-2 border rounded-xl wl"
                />
                <button className="mb-4 p-2 bg-pink-500 text-white rounded-lg ">
                    Sign up
                </button>
                <div className="mb-4 flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <label>I agree to the terms and conditions.</label>
                </div>
                <div className="md:flex justify-between ">
                    <button className="flex items-center p-2 border  rounded-xl">
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIxLjU0NjkgMTIuMjAxM0MyMS41NDY5IDExLjUxNzkgMjEuNDg1MyAxMC44MzQ0IDIxLjM2NzYgMTAuMTYyMUgxMS45NzI3VjE0LjAxNjVIMTcuMzM5NkMxNy4xMTU1IDE1LjI0ODkgMTYuMzk4NCAxNi4zMzU4IDE1LjM1MDggMTcuMDI0OUwxOC41NzIxIDE5LjUyOTFDMjAuNDYwMSAxNy43OTI0IDIxLjU0NjkgMTUuMjM3NyAyMS41NDY5IDEyLjIwMTNaIiBmaWxsPSIjM0U4MkYxIi8+CjxwYXRoIGQ9Ik0xNS4zNDk5IDE3LjAyNDlDMTQuNDU5MiAxNy42MjQzIDEzLjMxNjMgMTcuOTc3MyAxMS45NzE4IDE3Ljk3NzNDOS4zNzIzMiAxNy45NzczIDcuMTc2MjQgMTYuMjIzOCA2LjM5MTkzIDEzLjg2NTJMMy4wNTg1OSAxNi40NDc5QzQuNzUwNDcgMTkuODE0OCA4LjIwMTQ1IDIxLjk0MzcgMTEuOTcxOCAyMS45MzgxQzE0LjY2NjQgMjEuOTM4MSAxNi45MjQxIDIxLjA0NzMgMTguNTcxMiAxOS41MjM1TDE1LjM0OTkgMTcuMDI0OVoiIGZpbGw9IiMzMkE3NTMiLz4KPHBhdGggZD0iTTYuMzkyMTYgMTAuMDc4N0wzLjA1ODgyIDcuNDk2MDlDMS42NDcwNiAxMC4zMTQgMS42NDcwNiAxMy42MzYxIDMuMDU4ODIgMTYuNDU0MUw2LjM5MjE2IDEzLjg3MTRDNS45Nzc1OSAxMi42MzkgNS45Nzc1OSAxMS4zMDU2IDYuMzkyMTYgMTAuMDc4N1oiIGZpbGw9IiNGOUJCMDAiLz4KPHBhdGggZD0iTTExLjk3MTggMkM4LjIwMTQ1IDIgNC43NTA0NyA0LjEyODg1IDMuMDU4NTkgNy40OTU4TDYuMzkxOTMgMTAuMDc4NEM3LjE3NjI0IDcuNzE5ODkgOS4zNzIzMiA1Ljk2NjM5IDExLjk3MTggNS45NjYzOUMxMy40MzM5IDUuOTY2MzkgMTQuNzUwNSA2LjQ3MDU5IDE1Ljc4MTMgNy40NTY1OEwxOC42NDQgNC41OTM4NEMxNi45MTg1IDIuOTg1OTkgMTQuNjYwOCAyIDExLjk3MTggMloiIGZpbGw9IiNFNzQxMzMiLz4KPC9zdmc+Cg==" alt="Google" className="mr-2" />
                        Google
                    </button>
                    <button className="flex items-center p-2 border  rounded-xl">
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMyAxMi4wNjcyQzIzIDUuOTU0OTYgMTguMDc1MSAxIDEyIDFDNS45MjQ4NiAxIDEgNS45NTQ5NiAxIDEyLjA2NzJDMSAxNy41OTEyIDUuMDIyNTQgMjIuMTY5NyAxMC4yODEyIDIzVjE1LjI2NjNINy40ODgyOFYxMi4wNjcySDEwLjI4MTJWOS42Mjg5OEMxMC4yODEyIDYuODU1MjUgMTEuOTIzNSA1LjMyMzEzIDE0LjQzNjEgNS4zMjMxM0MxNS42Mzk2IDUuMzIzMTMgMTYuODk4NCA1LjUzOTI5IDE2Ljg5ODQgNS41MzkyOVY4LjI2Mjg3SDE1LjUxMTRDMTQuMTQ0OSA4LjI2Mjg3IDEzLjcxODggOS4xMTU5NyAxMy43MTg4IDkuOTkxMTlWMTIuMDY3MkgxNi43Njk1TDE2LjI4MTggMTUuMjY2M0gxMy43MTg4VjIzQzE4Ljk3NzUgMjIuMTY5NyAyMyAxNy41OTEyIDIzIDEyLjA2NzJaIiBmaWxsPSIjMTg3N0YyIi8+Cjwvc3ZnPgo=" alt="Facebook" className="mr-2" />
                        Facebook
                    </button>
                    <button className="flex items-center p-2 border  rounded-xl">
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjI5MzkgMTIuNDczMUMxNy4yOTM5IDEwLjAxMzYgMTkuMzU2NyA4LjgyMzU1IDE5LjQzNjEgOC43NDQyMUMxOC4yNDYgNy4wNzgwOSAxNi41MDA1IDYuODQwMDggMTUuODY1OCA2Ljc2MDc0QzE0LjM1ODQgNi42MDIwNiAxMi44NTA5IDcuNjMzNDYgMTIuMTM2OSA3LjYzMzQ2QzExLjM0MzUgNy42MzM0NiAxMC4xNTM0IDYuNzYwNzQgOC44ODM5OSA2Ljc2MDc0QzcuMjE3ODggNi43NjA3NCA1LjcxMDQ0IDcuNzEyOCA0LjgzNzcxIDkuMjIwMjRDMy4wOTIyNiAxMi4yMzUxIDQuMzYxNjggMTYuNjc4MSA2LjAyNzc5IDE5LjEzNzZDNi45MDA1MiAyMC4zMjc3IDcuODUyNTkgMjEuNjc2NCA5LjEyMjAxIDIxLjU5NzFDMTAuMzkxNCAyMS41MTc4IDEwLjg2NzUgMjAuODAzNyAxMi4zNzQ5IDIwLjgwMzdDMTMuODgyMyAyMC44MDM3IDE0LjI3OSAyMS41OTcxIDE1LjYyNzggMjEuNTk3MUMxNi45NzY2IDIxLjU5NzEgMTcuODQ5MyAyMC40MDcgMTguNjQyNyAxOS4yMTY5QzE5LjU5NDcgMTcuODY4MiAxOS45OTE0IDE2LjUxOTQgMTkuOTkxNCAxNi40NDAxQzE5LjkxMjEgMTYuMzYwNyAxNy4yOTM5IDE1LjQwODcgMTcuMjkzOSAxMi40NzMxWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTE0LjgzNDggNS4xNzM1NUMxNS40Njk1IDQuMzAwODMgMTUuOTQ1NSAzLjE5MDA4IDE1Ljg2NjIgMkMxNC45MTQxIDIuMDc5MzQgMTMuNjQ0NyAyLjYzNDcxIDEzLjAxIDMuNTA3NDRDMTIuMzc1MyA0LjIyMTQ5IDExLjgxOTkgNS40MTE1NyAxMS45Nzg2IDYuNTIyMzFDMTMuMDEgNi42MDE2NSAxNC4xMjA3IDUuOTY2OTQgMTQuODM0OCA1LjE3MzU1WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==" alt="Apple" className="mr-2" />
                        Apple
                    </button>
                </div>
            </div>
            <div className=" md:flex flex-col justify-center items-center hidden
            ">
                <img src="https://deriv.com/static/2ed39d813b4158894d971657a092bbdf/937ac/banner-phone.avif" alt="Phone Preview" className=' w-[65%] -mt-20' />
                <div className='absolute z-10 w-[50%] text-left flex'>
                <h2 className="text-5xl  font-bold text-white md:ml-[25%] hidden">Get a taste of the Growwin experience</h2>
                <button className="mt-6 p-2 text-white bg-red-500 rounded text-5xl hidden">
                    &gt;
                </button>
                </div>
            </div>
        </div>
    );
}

export default SignupComponent;
