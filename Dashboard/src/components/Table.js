import React from "react";

export default function Table(props) {
    return (
        <div className="table-container">
            <table class="table-auto">
                <thead>
                    <tr>
                    <th class="px-4 py-2">Stocks</th>
                    <th class="px-4 py-2">Current Stock Price</th>
                    <th class="px-4 py-2">Amount of Stocks</th>
                    <th class="px-4 py-2">Total Amount</th>
                    <th class="px-4 py-2">% Growth</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td class="border px-4 py-2">Apple</td>
                    <td class="border px-4 py-2">$175.24</td>
                    <td class="border px-4 py-2">1.13</td>
                    <td class="border px-4 py-2">$200</td>
                    <td class="border px-4 py-2">22</td>
                    </tr>
                    <tr class="bg-gray-100">
                    <td class="border px-4 py-2">Tesla</td>
                    <td class="border px-4 py-2">$174.64</td>
                    <td class="border px-4 py-2">0.983</td>
                    <td class="border px-4 py-2">$150</td>
                    <td class="border px-4 py-2">31</td>
                    </tr>
                    <tr>
                    <td class="border px-4 py-2">Microsoft</td>
                    <td class="border px-4 py-2">$427.62</td>
                    <td class="border px-4 py-2">1.152</td>
                    <td class="border px-4 py-2">$500</td>
                    <td class="border px-4 py-2">15</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}