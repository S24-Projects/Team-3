import React from "react";

export default function Table(props) {
    return (
        <div className="table-container">
            <table class="table-auto">
                <thead>
                    <tr>
                    <th class="px-4 py-2">Stocks</th>
                    <th class="px-4 py-2">Amount</th>
                    <th class="px-4 py-2">% Growth</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td class="border px-4 py-2">Apple</td>
                    <td class="border px-4 py-2">$200</td>
                    <td class="border px-4 py-2">22</td>
                    </tr>
                    <tr class="bg-gray-100">
                    <td class="border px-4 py-2">Tesla</td>
                    <td class="border px-4 py-2">$150</td>
                    <td class="border px-4 py-2">31</td>
                    </tr>
                    <tr>
                    <td class="border px-4 py-2">Intro to JavaScript</td>
                    <td class="border px-4 py-2">$300</td>
                    <td class="border px-4 py-2">15</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}