import React from 'react';

const TradeType = ({ icon, title, description }) => (
    <div className="lg:flex lg:flex-col lg:items-center md:p-8 mx-auto py-20 items-center text-center ">
        <div className="mb-4 w-[20%] md:w-[40%] items-cente ">
            <img src={icon} alt={title} className='items-center '/>
        </div>
        <h3 className="text-xl mb-2 text-gray-50 font-bold mx-auto">{title}</h3>
        <p className="text-center mb-4 text-gray-50 pb-10  ">{description}</p>
        <a href="#" className="text-blue-300 hover:underline underline">Learn more </a>
    </div>
);

const TradeTypes = () => {
    const tradeTypesData = [
        {
            icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTciIHZpZXdCb3g9IjAgMCA5NiA5NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTgwLjY4NjggMjIuMDM1M0wxMS4yMzY4IDQwLjY0NDRDOS4xMDI4OSA0MS4yMTYyIDcuODM2NTYgNDMuNDA5NSA4LjQwODMyIDQ1LjU0MzRMMTIuMjQ2NiA1OS44NjgxQzEyLjgxODQgNjIuMDAxOSAxNS4wMTE3IDYzLjI2ODMgMTcuMTQ1NiA2Mi42OTY1TDg2LjU5NTcgNDQuMDg3NEM4OC43Mjk1IDQzLjUxNTYgODkuOTk1OSA0MS4zMjIzIDg5LjQyNDEgMzkuMTg4NEw4NS41ODU4IDI0Ljg2MzdDODUuMDE0IDIyLjcyOTkgODIuODIwNyAyMS40NjM2IDgwLjY4NjggMjIuMDM1M1oiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CjxwYXRoIGQ9Ik01OS45NTExIDcwLjY2ODRDNjEuNDQxMSA3My4zNTg0IDU5LjQ2MTEgNzYuNjU4NCA1Ni4zOTExIDc2LjYwODRMNDguOTExMSA3Ni40Nzg0TDQxLjQzMTEgNzYuMzQ4NEMzOC4zNTExIDc2LjI5ODQgMzYuNDgxMSA3Mi45Mjg0IDM4LjA3MTEgNzAuMjg4NEw0MS45MjExIDYzLjg2ODRMNDUuNzcxMSA1Ny40NDg0QzQ3LjM1MTEgNTQuODA4NCA1MS4yMDExIDU0Ljg2ODQgNTIuNzAxMSA1Ny41Njg0TDU2LjMzMTEgNjQuMTA4NEw1OS45NjExIDcwLjY0ODRMNTkuOTUxMSA3MC42Njg0WiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPC9zdmc+Cg==", // Update with the path to your icon
            title: "CFDs",
            description: "Trade with leverage and low spreads for better returns on successful trades."
        },
        {
            icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTciIHZpZXdCb3g9IjAgMCA5NiA5NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTU4LjM4OTggMTMuNjM5OUw0My43Mzk4IDI4LjI5OTlDNDEuNTk5OCAzMC40Mzk5IDQxLjU5OTggMzMuODk5OSA0My43Mzk4IDM2LjAzOTlMNDMuODk5OCAzNi4xOTk5QzQ2LjAzOTggMzguMzM5OSA0OS40OTk4IDM4LjMzOTkgNTEuNjM5OCAzNi4xOTk5TDU1LjE3OTggMzIuNjU5OUM1Ni4zMjk4IDMxLjUwOTkgNTguMjg5OCAzMi4zMTk5IDU4LjI4OTggMzMuOTQ5OVY0OS41ODk5QzU4LjI4OTggNTEuNTk5OSA1OS45MTk4IDUzLjIzOTkgNjEuOTM5OCA1My4yMzk5SDY1LjE2OThDNjcuMTc5OCA1My4yMzk5IDY4LjgxOTggNTEuNjA5OSA2OC44MTk4IDQ5LjU4OTlWMzMuOTQ5OUM2OC44MTk4IDMyLjMyOTkgNzAuNzc5OCAzMS41MDk5IDcxLjkyOTggMzIuNjU5OUw3NS40Njk4IDM2LjE5OTlDNzcuNjA5OCAzOC4zMzk5IDgxLjA2OTggMzguMzM5OSA4My4yMDk4IDM2LjE5OTlMODMuMzY5OCAzNi4wMzk5Qzg1LjUwOTggMzMuODk5OSA4NS41MDk4IDMwLjQzOTkgODMuMzY5OCAyOC4yOTk5TDY4LjY5OTggMTMuNjM5OUM2NS44NDk4IDEwLjc4OTkgNjEuMjI5OCAxMC43ODk5IDU4LjM3OTggMTMuNjM5OUg1OC4zODk4WiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTM3LjYxMDQgODMuMzU5OEw1Mi4yNjA0IDY4LjY5OThDNTQuNDAwNCA2Ni41NTk4IDU0LjQwMDQgNjMuMDk5OCA1Mi4yNjA0IDYwLjk1OThMNTIuMTAwNCA2MC43OTk4QzQ5Ljk2MDQgNTguNjU5OCA0Ni41MDA0IDU4LjY1OTggNDQuMzYwNCA2MC43OTk4TDQwLjgyMDQgNjQuMzM5OEMzOS42NzA0IDY1LjQ4OTggMzcuNzEwNCA2NC42Nzk4IDM3LjcxMDQgNjMuMDQ5OFY0Ny40MDk4QzM3LjcxMDQgNDUuMzk5OCAzNi4wODA0IDQzLjc1OTggMzQuMDYwNCA0My43NTk4SDMwLjgzMDRDMjguODIwNCA0My43NTk4IDI3LjE4MDQgNDUuMzg5OCAyNy4xODA0IDQ3LjQwOThWNjMuMDQ5OEMyNy4xODA0IDY0LjY2OTggMjUuMjIwNCA2NS40ODk4IDI0LjA3MDQgNjQuMzM5OEwyMC41MzA0IDYwLjc5OThDMTguMzkwNCA1OC42NTk4IDE0LjkzMDQgNTguNjU5OCAxMi43OTA0IDYwLjc5OThMMTIuNjMwNCA2MC45NTk4QzEwLjQ5MDQgNjMuMDk5OCAxMC40OTA0IDY2LjU1OTggMTIuNjMwNCA2OC42OTk4TDI3LjMwMDQgODMuMzU5OEMzMC4xNTA0IDg2LjIwOTggMzQuNzcwNCA4Ni4yMDk4IDM3LjYyMDQgODMuMzU5OEgzNy42MTA0WiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==", // Update with the path to your icon
            title: "Options",
            description: "Earn a range of payouts by correctly predicting market movements."
        },
        {
            icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTciIHZpZXdCb3g9IjAgMCA5NiA5NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTU3Ljg3IDQ2LjU0TDc4LjM4IDI2LjAzQzgwLjU0IDIzLjg3IDgwLjU0IDIwLjM2IDc4LjM4IDE4LjJMNzguMyAxOC4xMkM3Ni4xNCAxNS45NiA3Mi42MyAxNS45NiA3MC40NyAxOC4xMkw0OS45NiAzOC42M0M0OC44OCAzOS43MSA0Ny4xMyAzOS43MSA0Ni4wNSAzOC42M0wyNS41MyAxOC4xMkMyMy4zNyAxNS45NiAxOS44NiAxNS45NiAxNy43IDE4LjEyTDE3LjYyIDE4LjJDMTUuNDYgMjAuMzYgMTUuNDYgMjMuODcgMTcuNjIgMjYuMDNMMzguMTMgNDYuNTRDMzkuMjEgNDcuNjIgMzkuMjEgNDkuMzcgMzguMTMgNTAuNDVMMTcuNjIgNzAuOTZDMTUuNDYgNzMuMTIgMTUuNDYgNzYuNjMgMTcuNjIgNzguNzlMMTcuNyA3OC44N0MxOS44NiA4MS4wMyAyMy4zNyA4MS4wMyAyNS41MyA3OC44N0w0Ni4wNCA1OC4zNkM0Ny4xMiA1Ny4yOCA0OC44NyA1Ny4yOCA0OS45NSA1OC4zNkw3MC40NiA3OC44N0M3Mi42MiA4MS4wMyA3Ni4xMyA4MS4wMyA3OC4yOSA3OC44N0w3OC4zNyA3OC43OUM4MC41MyA3Ni42MyA4MC41MyA3My4xMiA3OC4zNyA3MC45Nkw1Ny44NiA1MC40NUM1Ni43OCA0OS4zNyA1Ni43OCA0Ny42MiA1Ny44NiA0Ni41NEg1Ny44N1oiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+Cjwvc3ZnPgo=", // Update with the path to your icon
            title: "Multipliers",
            description: "Multiply your potential profit without risking more than your stake."
        }
    ];

    return (
        <div className="bg-[rgb(65,70,82)] py-20 mx-auto w-full">
            <div className="lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-5xl mb-8 text-center font-bold text-gray-100 font-sans font-ubuntu">Trade types</h2>
                <p className="text-xl mb-12 text-center text-white font-sans">Trade the way you want with 3 exciting trade types.</p>
                <div className="lg:flex lg:justify-between mx-auto">
                    {tradeTypesData.map((type, index) => (
                        <TradeType key={index} {...type} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TradeTypes;
