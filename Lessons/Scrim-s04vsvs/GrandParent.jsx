import React from "react"
import Parent from "./Parent"

export default function GrandParent({ count }) {
    console.log("[👴🏼]   [ ]   [ ]   [ ] rendered")
    return (
        <div className="grandparent">
            <p>GrandParent Component. Count: {count}</p>
            <Parent />
            <Parent />
        </div>
    )
}
