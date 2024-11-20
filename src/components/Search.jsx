import { useState } from "react";

function Search({ cb = Function.prototype }) {
	const [value, setValue] = useState();

	const handelKey = (e) => {
		if (e.key === "Enter") {
			handelSubmit();
		}
	};

	const handelSubmit = () => {
		cb(value);
	};

	return (
		<div className="row">
			<div className="input-field col s12">
				<input
					type="search"
					id="search-field"
					placeholder="Search"
					onKeyDown={handelKey}
					onChange={(e) => setValue(e.target.value)}
					value={value}
				/>
				<button
					className="btn"
					style={{
						position: "absolute",
						top: 0,
						right: 0,
					}}
					onClick={handelSubmit}
				>
					Search
				</button>
			</div>
		</div>
	);
}

export { Search };
