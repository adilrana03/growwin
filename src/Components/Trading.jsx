import React, { useState } from 'react';
import exchange from '../assets/exchange.png'
function ForexTrading() {
    const [selectedTab, setSelectedTab] = useState('Forex');

    const derivedIndicesData = [
        { pair: 'EUR/USD', bid: 1.07164, ask: 1.0717, spread: 0.00006, change: '+0.95%' },
        { pair: 'GBP/JPY', bid: 184.228, ask: 184.251, spread: 0.023, change: '+0.44%' },
        { pair: 'USD/CAD', bid: 1.36786, ask: 1.36796, spread: 0.0001, change: '-0.50%' },
        { pair: 'GBP/USD', bid: 1.23332, ask: 1.23338, spread: 0.00006, change: '+1.18%' },
        { pair: 'AUD/USD', bid: 0.65002, ask: 0.65006, spread: 0.00004, change: '+1.12%' },
        // Your derived indices data here
    ];
    const stocksIndicesData = [
        // Your stocks & indices data here
        { pair: 'EUR/USD', bid: 1.07164, ask: 1.0717, spread: 0.00006, change: '+0.95%' },
        { pair: 'USD/CAD', bid: 1.36786, ask: 1.36796, spread: 0.0001, change: '-0.50%' },
        { pair: 'GBP/JPY', bid: 184.228, ask: 184.251, spread: 0.023, change: '+0.44%' },
        { pair: 'AUD/USD', bid: 0.65002, ask: 0.65006, spread: 0.00004, change: '+1.12%' },
        { pair: 'GBP/USD', bid: 1.23332, ask: 1.23338, spread: 0.00006, change: '+1.18%' },
    ];


    const currencyData = [
        { pair: 'AUD/USD', bid: 0.65002, ask: 0.65006, spread: 0.00004, change: '+1.12%' },
        { pair: 'EUR/USD', bid: 1.07164, ask: 1.0717, spread: 0.00006, change: '+0.95%' },
        { pair: 'GBP/JPY', bid: 184.228, ask: 184.251, spread: 0.023, change: '+0.44%' },
        { pair: 'GBP/USD', bid: 1.23332, ask: 1.23338, spread: 0.00006, change: '+1.18%' },
        { pair: 'USD/CAD', bid: 1.36786, ask: 1.36796, spread: 0.0001, change: '-0.50%' },
    ];
    const getData = () => {
        switch (selectedTab) {
            case 'Indices':
                return derivedIndicesData;
            case 'Stocks':
                return stocksIndicesData;
            case 'Forex':
            default:
                return currencyData;
        }
    };
    return (
        <div className="lg:p-8 lg:w-[80%] w-[95%] mx-auto pb-20 bg-gray-50 rounded-2xl  md:my-0 mt-28 p-[2px]">
            <div className="md:flex lg:justify-around mb-4 md:text-2xl text-xl border-b pb-2 text-gray-400 p-4 flex overflow-scroll gap-12 font-sans font-Ubuntu">
                <button className={selectedTab === 'Forex' ? 'text-red-500 border-b-2 border-red-500 ' : ''} onClick={() => setSelectedTab('Forex')}>
                    <div className=''>
                        <img className='ml-3 mb-2' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy4yOTk4IDQuNjg3MTNINi4wMDk3N0M0LjkwNDc3IDQuNjg3MTMgNC4wMDk3NyA1LjU4MjEzIDQuMDA5NzcgNi42ODcxM1YxOS4xMjcxQzQuMDA5NzcgMTkuNjc3MSA0LjQ1OTc3IDIwLjEyNzEgNS4wMDk3NyAyMC4xMjcxSDYuMDk5NzdDNi42NDk3NyAyMC4xMjcxIDcuMDk5NzcgMTkuNjc3MSA3LjA5OTc3IDE5LjEyNzFWMTMuOTUyMUgxMC4yMTQ4QzEwLjc2NDggMTMuOTUyMSAxMS4yMTQ4IDEzLjUwMjEgMTEuMjE0OCAxMi45NTIxVjExLjg2MjFDMTEuMjE0OCAxMS4zMTIxIDEwLjc2NDggMTAuODYyMSAxMC4yMTQ4IDEwLjg2MjFINy4wOTk3N1Y3Ljc3MjEzSDEzLjMwNDhDMTMuODU0OCA3Ljc3MjEzIDE0LjMwNDggNy4zMjIxMyAxNC4zMDQ4IDYuNzcyMTNWNS42ODIxM0MxNC4zMDQ4IDUuMTMyMTMgMTMuODU0OCA0LjY4MjEzIDEzLjMwNDggNC42ODIxM0wxMy4yOTk4IDQuNjg3MTNaIiBzdHJva2U9IiNGRjQ0NEYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0LjM5NSAyMC4xMjY5SDE1LjcwNUMxNi4wOCAyMC4xMjY5IDE2LjQyIDE5LjkxNjkgMTYuNTkgMTkuNTg2OUwxNy4wODUgMTguNjMxOUwxNy41OCAxOS41ODY5QzE3Ljc1IDE5LjkxNjkgMTguMDk1IDIwLjEyNjkgMTguNDY1IDIwLjEyNjlIMTkuNzc1QzIwLjUyNSAyMC4xMjY5IDIxLjAxIDE5LjMzMTkgMjAuNjYgMTguNjY2OUwxOC44NiAxNS4yMDE5TDIwLjg5IDExLjI5NjlDMjEuMjM1IDEwLjYzMTkgMjAuNzU1IDkuODM2OTEgMjAuMDA1IDkuODM2OTFIMTguNjk1QzE4LjMyIDkuODM2OTEgMTcuOTggMTAuMDQ2OSAxNy44MSAxMC4zNzY5TDE3LjA4NSAxMS43NzE5TDE2LjM2IDEwLjM3NjlDMTYuMTkgMTAuMDQ2OSAxNS44NDUgOS44MzY5MSAxNS40NzUgOS44MzY5MUgxNC4xNjVDMTMuNDE1IDkuODM2OTEgMTIuOTMgMTAuNjMxOSAxMy4yOCAxMS4yOTY5TDE1LjMxIDE1LjIwMTlMMTMuNTEgMTguNjY2OUMxMy4xNjUgMTkuMzMxOSAxMy42NDUgMjAuMTI2OSAxNC4zOTUgMjAuMTI2OVoiIHN0cm9rZT0iI0ZGNDQ0RiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=#forex" alt="" />
                        Forex
                    </div>
                </button>
                <button className={selectedTab === 'Indices' ? 'text-red-500 border-b-2 border-red-500' : ''} onClick={() => setSelectedTab('Indices')}>
                    <div className=''>
                        <img className='ml-3 mb-2' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzkwMl8xMjUwOCkiPgo8cGF0aCBkPSJNMTIgMjEuMzY3MkMxNi45NzA2IDIxLjM2NzIgMjEgMTcuMzM3OCAyMSAxMi4zNjcyQzIxIDcuMzk2NjIgMTYuOTcwNiAzLjM2NzE5IDEyIDMuMzY3MTlDNy4wMjk0NCAzLjM2NzE5IDMgNy4zOTY2MiAzIDEyLjM2NzJDMyAxNy4zMzc4IDcuMDI5NDQgMjEuMzY3MiAxMiAyMS4zNjcyWiIgc3Ryb2tlPSIjRkY0NDRGIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPHBhdGggZD0iTTE5LjE5OTggMTcuNzY3MkMxNy41NTk4IDE2LjkxNzIgMTQuOTM5OCAxNi4zNjcyIDExLjk5OTggMTYuMzY3MkM5LjA1OTggMTYuMzY3MiA2LjQzOTggMTYuOTE3MiA0Ljc5OTggMTcuNzY3MiIgc3Ryb2tlPSIjRkY0NDRGIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPHBhdGggZD0iTTQuNzk5OCA2Ljk2NzI5QzYuNDM5OCA3LjgxNzI5IDkuMDU5OCA4LjM2NzI5IDExLjk5OTggOC4zNjcyOUMxNC45Mzk4IDguMzY3MjkgMTcuNTU5OCA3LjgxNzI5IDE5LjE5OTggNi45NjcyOSIgc3Ryb2tlPSIjRkY0NDRGIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPHBhdGggZD0iTTEyLjAwMDEgMjEuMzY3MkMxMy44NjY4IDIxLjM2NzIgMTUuMzgwMSAxNy4zMzc4IDE1LjM4MDEgMTIuMzY3MkMxNS4zODAxIDcuMzk2NjIgMTMuODY2OCAzLjM2NzE5IDEyLjAwMDEgMy4zNjcxOUMxMC4xMzM0IDMuMzY3MTkgOC42MjAxMiA3LjM5NjYyIDguNjIwMTIgMTIuMzY3MkM4LjYyMDEyIDE3LjMzNzggMTAuMTMzNCAyMS4zNjcyIDEyLjAwMDEgMjEuMzY3MloiIHN0cm9rZT0iI0ZGNDQ0RiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CjxwYXRoIGQ9Ik0yMSAxMi4zNjcySDMiIHN0cm9rZT0iI0ZGNDQ0RiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfOTAyXzEyNTA4Ij4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=#derived" alt="" />
                        Indices
                    </div>
                </button>
                <button className={selectedTab === 'Stocks' ? 'text-red-500 border-b-2 border-red-500' : ''} onClick={() => setSelectedTab('Stocks')}>
                    <div className=''>
                        <img className='ml-3 mb-2' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4LjkzNzkgNy40OTIzVjMuNTkzODlNMTguOTM3OSAxOC40NTQ5VjIwLjQwMTVNMTIuNDQ1NSAyLjk0Njc4VjEuMDAwMjRNMTIuNDQ1NSAxOS43NTQyVjIzLjAwMDJNNS45NTM2MSA1LjU0NTcyVjMuNTk5MTlNNS45NTM2MSAxNy44MDc4VjIxLjA1MzhNNS4wNjk1MyA1LjU0NTE2SDYuODI4OTFDNy40MTk1OSA1LjU0NTE2IDcuODk4NDQgNi4wMjQgNy44OTg0NCA2LjYxNDY4VjE2LjczNzdDNy44OTg0NCAxNy4zMjg0IDcuNDE5NTkgMTcuODA3MiA2LjgyODkxIDE3LjgwNzJINS4wNjk1M0M0LjQ3ODg1IDE3LjgwNzIgNCAxNy4zMjg0IDQgMTYuNzM3N1Y2LjYxNDY4QzQgNi4wMjQgNC40Nzg4NSA1LjU0NTE2IDUuMDY5NTMgNS41NDUxNlpNMTEuNTY3MSAzLjI3MjM0SDEzLjMyNjVDMTMuOTE3MiAzLjI3MjM0IDE0LjM5NiAzLjc1MTE5IDE0LjM5NiA0LjM0MTg3VjE4LjM1OEMxNC4zOTYgMTguOTQ4NyAxMy45MTcyIDE5LjQyNzUgMTMuMzI2NSAxOS40Mjc1SDExLjU2NzFDMTAuOTc2NCAxOS40Mjc1IDEwLjQ5NzYgMTguOTQ4NyAxMC40OTc2IDE4LjM1OFY0LjM0MTg3QzEwLjQ5NzYgMy43NTExOSAxMC45NzY0IDMuMjcyMzQgMTEuNTY3MSAzLjI3MjM0Wk0xOC4wNTkgNy40OTE2OUgxOS44MTg0QzIwLjQwOSA3LjQ5MTY5IDIwLjg4NzkgNy45NzA1MyAyMC44ODc5IDguNTYxMjFWMTcuMzg0OEMyMC44ODc5IDE3Ljk3NTUgMjAuNDA5IDE4LjQ1NDMgMTkuODE4NCAxOC40NTQzSDE4LjA1OUMxNy40NjgzIDE4LjQ1NDMgMTYuOTg5NCAxNy45NzU1IDE2Ljk4OTQgMTcuMzg0OFY4LjU2MTIxQzE2Ljk4OTQgNy45NzA1MyAxNy40NjgzIDcuNDkxNjkgMTguMDU5IDcuNDkxNjlaIiBzdHJva2U9IiNGRjQ0NEYiIHN0cm9rZS13aWR0aD0iMS4wNjk1MyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=#indices" alt="" />
                        Stocks
                    </div>
                </button>
                <button className={selectedTab === 'Cryptocurrencies' ? 'text-red-500 border-b-2 border-red-500' : ''} onClick={() => setSelectedTab('Cryptocurrencies')}>
                    <div className=''>
                        <img className='ml-16 mb-2' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjA5NDcgOC4wNjAwNkwxNC4wOTQ3IDguNTYwMDZIMTQuMDk0N1Y4LjA2MDA2Wk0xNC4wOTQ3IDExLjUwMDFDMTMuODE4NiAxMS41MDAxIDEzLjU5NDcgMTEuNzIzOSAxMy41OTQ3IDEyLjAwMDFDMTMuNTk0NyAxMi4yNzYyIDEzLjgxODYgMTIuNTAwMSAxNC4wOTQ3IDEyLjUwMDFWMTEuNTAwMVpNMTQuNzUgMTUuNDRDMTQuNDczOSAxNS40NCAxNC4yNSAxNS42NjM5IDE0LjI1IDE1Ljk0QzE0LjI1IDE2LjIxNjEgMTQuNDczOSAxNi40NCAxNC43NSAxNi40NFYxNS40NFpNMTAuNSA4LjA2TDEwLjUgNy41NkgxMC41VjguMDZaTTE0Ljc1IDE2LjQzNUMxNS4wMjYxIDE2LjQzNSAxNS4yNSAxNi4yMTExIDE1LjI1IDE1LjkzNUMxNS4yNSAxNS42NTg5IDE1LjAyNjEgMTUuNDM1IDE0Ljc1IDE1LjQzNVYxNi40MzVaTTkuNSAxMS41QzkuMjIzODYgMTEuNSA5IDExLjcyMzkgOSAxMkM5IDEyLjI3NjEgOS4yMjM4NiAxMi41IDkuNSAxMi41VjExLjVaTTEwLjk2OTcgOC4wNkMxMC45Njk3IDguMzM2MTQgMTEuMTkzNiA4LjU2IDExLjQ2OTcgOC41NkMxMS43NDU5IDguNTYgMTEuOTY5NyA4LjMzNjE0IDExLjk2OTcgOC4wNkgxMC45Njk3Wk0xMS45Njk3IDZDMTEuOTY5NyA1LjcyMzg2IDExLjc0NTkgNS41IDExLjQ2OTcgNS41QzExLjE5MzYgNS41IDEwLjk2OTcgNS43MjM4NiAxMC45Njk3IDZIMTEuOTY5N1pNMTQuNTk0NyA2QzE0LjU5NDcgNS43MjM4NiAxNC4zNzA5IDUuNSAxNC4wOTQ3IDUuNUMxMy44MTg2IDUuNSAxMy41OTQ3IDUuNzIzODYgMTMuNTk0NyA2SDE0LjU5NDdaTTEwLjk2OTcgMTcuOTk5OUMxMC45Njk3IDE4LjI3NjEgMTEuMTkzNiAxOC40OTk5IDExLjQ2OTcgMTguNDk5OUMxMS43NDU5IDE4LjQ5OTkgMTEuOTY5NyAxOC4yNzYxIDExLjk2OTcgMTcuOTk5OUgxMC45Njk3Wk0xMS45Njk3IDE1LjkzOTlDMTEuOTY5NyAxNS42NjM4IDExLjc0NTkgMTUuNDM5OSAxMS40Njk3IDE1LjQzOTlDMTEuMTkzNiAxNS40Mzk5IDEwLjk2OTcgMTUuNjYzOCAxMC45Njk3IDE1LjkzOTlIMTEuOTY5N1pNMTMuNTk0NyAxNy45OTk5QzEzLjU5NDcgMTguMjc2MSAxMy44MTg2IDE4LjQ5OTkgMTQuMDk0NyAxOC40OTk5QzE0LjM3MDkgMTguNDk5OSAxNC41OTQ3IDE4LjI3NjEgMTQuNTk0NyAxNy45OTk5SDEzLjU5NDdaTTE0LjU5NDcgMTUuOTM5OUMxNC41OTQ3IDE1LjY2MzggMTQuMzcwOSAxNS40Mzk5IDE0LjA5NDcgMTUuNDM5OUMxMy44MTg2IDE1LjQzOTkgMTMuNTk0NyAxNS42NjM4IDEzLjU5NDcgMTUuOTM5OUgxNC41OTQ3Wk0xNC4wOTQ3IDguNTYwMDZDMTQuOTA0NCA4LjU2MDA2IDE1LjU2NDcgOS4yMTcwMyAxNS41NjQ3IDEwLjAzMDFIMTYuNTY0N0MxNi41NjQ3IDguNjYzMDkgMTUuNDU1IDcuNTYwMDYgMTQuMDk0NyA3LjU2MDA2VjguNTYwMDZaTTE1LjU2NDcgMTAuMDMwMUMxNS41NjQ3IDEwLjg0MzkgMTQuOTA4NiAxMS41MDAxIDE0LjA5NDcgMTEuNTAwMVYxMi41MDAxQzE1LjQ2MDkgMTIuNTAwMSAxNi41NjQ3IDExLjM5NjIgMTYuNTY0NyAxMC4wMzAxSDE1LjU2NDdaTTE0Ljc1IDEyLjVDMTUuNTU5NyAxMi41IDE2LjIyIDEzLjE1NyAxNi4yMiAxMy45N0gxNy4yMkMxNy4yMiAxMi42MDMgMTYuMTEwMyAxMS41IDE0Ljc1IDExLjVWMTIuNVpNMTYuMjIgMTMuOTdDMTYuMjIgMTQuNzgzOSAxNS41NjM5IDE1LjQ0IDE0Ljc1IDE1LjQ0VjE2LjQ0QzE2LjExNjEgMTYuNDQgMTcuMjIgMTUuMzM2MSAxNy4yMiAxMy45N0gxNi4yMlpNMTQuMDk0NyA3LjU2MDA2TDEwLjUgNy41NkwxMC41IDguNTZMMTQuMDk0NyA4LjU2MDA2TDE0LjA5NDcgNy41NjAwNlpNMTAuNSA3LjU2QzkuNjczODYgNy41NiA5IDguMjMzODYgOSA5LjA2SDEwQzEwIDguNzg2MTQgMTAuMjI2MSA4LjU2IDEwLjUgOC41NlY3LjU2Wk05IDkuMDZWMTQuOTM1SDEwVjkuMDZIOVpNOSAxNC45MzVDOSAxNS43NjExIDkuNjczODYgMTYuNDM1IDEwLjUgMTYuNDM1VjE1LjQzNUMxMC4yMjYxIDE1LjQzNSAxMCAxNS4yMDg5IDEwIDE0LjkzNUg5Wk0xMC41IDE2LjQzNUgxNC43NVYxNS40MzVIMTAuNVYxNi40MzVaTTE0Ljc1IDExLjVIOS41VjEyLjVIMTQuNzVWMTEuNVpNMTEuOTY5NyA4LjA2VjZIMTAuOTY5N1Y4LjA2SDExLjk2OTdaTTE0LjU5NDcgOC4wNjAwNlY2SDEzLjU5NDdWOC4wNjAwNkgxNC41OTQ3Wk0xMS45Njk3IDE3Ljk5OTlWMTUuOTM5OUgxMC45Njk3VjE3Ljk5OTlIMTEuOTY5N1pNMTQuNTk0NyAxNy45OTk5VjE1LjkzOTlIMTMuNTk0N1YxNy45OTk5SDE0LjU5NDdaTTIyLjUgMTJDMjIuNSAxNy41MjI4IDE4LjAyMjggMjIgMTIuNSAyMlYyM0MxOC41NzUxIDIzIDIzLjUgMTguMDc1MSAyMy41IDEySDIyLjVaTTEyLjUgMjJDNi45NzcxNSAyMiAyLjUgMTcuNTIyOCAyLjUgMTJIMS41QzEuNSAxOC4wNzUxIDYuNDI0ODcgMjMgMTIuNSAyM1YyMlpNMi41IDEyQzIuNSA2LjQ3NzE1IDYuOTc3MTUgMiAxMi41IDJWMUM2LjQyNDg3IDEgMS41IDUuOTI0ODcgMS41IDEySDIuNVpNMTIuNSAyQzE4LjAyMjggMiAyMi41IDYuNDc3MTUgMjIuNSAxMkgyMy41QzIzLjUgNS45MjQ4NyAxOC41NzUxIDEgMTIuNSAxVjJaIiBmaWxsPSIjRkY0NDRGIi8+Cjwvc3ZnPgo=#cryptocurrency" alt="" />
                        Cryptocurrencies
                    </div>
                </button>
                <button className={selectedTab === 'Commodities' ? 'text-red-500 border-b-2 border-red-500' : ''} onClick={() => setSelectedTab('Commodities')}>
                    <div className=''>
                        <img className='ml-12 mb-2 mx-auto' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzkwMl8xMzM3OCkiPgo8cGF0aCBkPSJNMTYuNjQ0NSAxMS42MTZINi4zNDQ2NUM1Ljk1NzcyIDExLjYxNiA1LjY5NjE0IDExLjIyOTEgNS44Mzc4MyAxMC44Njk0TDcuOTE0MTUgNS42ODY0NUM4LjA3NzY0IDUuMjcyMjUgOC40ODA5MiA0Ljk5OTc2IDguOTI3NzkgNC45OTk3NkgxNC4wNzIzQzE0LjUxOTIgNC45OTk3NiAxNC45MTcgNS4yNzIyNSAxNS4wODU5IDUuNjg2NDVMMTcuMTYyMiAxMC44Njk0QzE3LjMwMzkgMTEuMjI5MSAxNy4wNDI0IDExLjYxNiAxNi42NTU0IDExLjYxNkgxNi42NDQ1WiIgc3Ryb2tlPSIjRkY0NDRGIiBzdHJva2Utd2lkdGg9IjEuMDg5OTYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTAuODQ1NyAxOC4yMzE1SDAuNTQ1ODJDMC4xNTg4OTMgMTguMjMxNSAtMC4xMDI2OTEgMTcuODQ0NiAwLjAzOTAwMDcgMTcuNDg0OUwyLjExNTMzIDEyLjMwMTlDMi4yNzg4MiAxMS44ODc3IDIuNjgyMDkgMTEuNjE1MiAzLjEyODk2IDExLjYxNTJIOC4yNzM0NUM4LjcyMDMzIDExLjYxNTIgOS4xMTgxNSAxMS44ODc3IDkuMjg3MDkgMTIuMzAxOUwxMS4zNjM0IDE3LjQ4NDlDMTEuNTA1MSAxNy44NDQ2IDExLjI0MzUgMTguMjMxNSAxMC44NTY2IDE4LjIzMTVIMTAuODQ1N1oiIHN0cm9rZT0iI0ZGNDQ0RiIgc3Ryb2tlLXdpZHRoPSIxLjA4OTk2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTIyLjQ0MzQgMTguMjMxNUgxMi4xNDM1QzExLjc1NjUgMTguMjMxNSAxMS40OTUgMTcuODQ0NiAxMS42MzY3IDE3LjQ4NDlMMTMuNzEzIDEyLjMwMTlDMTMuODc2NSAxMS44ODc3IDE0LjI3OTcgMTEuNjE1MiAxNC43MjY2IDExLjYxNTJIMTkuODcxMUMyMC4zMTggMTEuNjE1MiAyMC43MTU4IDExLjg4NzcgMjAuODg0OCAxMi4zMDE5TDIyLjk2MTEgMTcuNDg0OUMyMy4xMDI4IDE3Ljg0NDYgMjIuODQxMiAxOC4yMzE1IDIyLjQ1NDMgMTguMjMxNUgyMi40NDM0WiIgc3Ryb2tlPSIjRkY0NDRGIiBzdHJva2Utd2lkdGg9IjEuMDg5OTYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzkwMl8xMzM3OCI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K#commodities" alt="" />
                        <h1> Commodities</h1>
                    </div>
                </button>
            </div>

            <p className="mt-4 mb-6 text-center py-3 text-sm md:text-base text-gray-500  hidden md:block">
                Benefit from round-the-clock trading hours (Monday to Friday), high liquidity, low barriers to entry, a wide range of offerings, and opportunities to trade on world events.
            </p>




            <table className="lg:w-full text-left  md:my-0">
                <thead>
                    <tr className="border-b flex justify-around bg-gray-100 p-4 px-2  rounded-t-2xl">
                        <th className="pb-2 text-left text-xs mr-1 ">Instrument</th>
                        <th className="pb-2 text-left text-xs mr-1 ">Bid price</th>
                        <th className="pb-2 text-left text-xs mr-1 ">Ask price</th>
                        <th className="pb-2 text-left text-xs mr-1 ">Spread</th>
                        <th className="pb-2 text-left text-xs mr-1 ">Daily % change</th>
                    </tr>
                </thead>
                <tbody>
                    {getData().map((currency, index) => (
                        <tr key={index} className="border-b py-2 flex justify-around text-left leading-10 text-gray-500 ">
                            <div className='text-left lg:w-20 '>
                                <td className='text-left '>{currency.pair}</td>
                            </div>
                            <div className='text-left lg:w-20'>
                                <td className='text-left '>{currency.bid}</td>
                            </div>
                            <div className='text-left lg:w-20'>
                                <td className='text-left '>{currency.ask}</td>
                            </div>
                            <div className='text-left lg:w-20'>
                                <td className='text-left '>{currency.spread}</td>
                            </div>
                            <div className='text-left lg:w-20'>
                                <td className={currency.change.startsWith('+') ? 'text-green-600' : 'text-left text-red-500'}>{currency.change}</td>
                            </div>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="mt-4">
                <a href="#" className="text-red-500 ">View all &gt;</a>
            </div>
            <a href="/comingsoon" className='text-center mx-auto'>
                <div className='text-center'>

                    <button className='bg-red-500 text-white rounded-xl py-2 px-5 mx-auto '>Trade Now </button>
                </div>
            </a>
        </div>
    );
}

export default ForexTrading;
