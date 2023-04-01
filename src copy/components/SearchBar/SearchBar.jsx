import './SearchBar.scss';
export const SearchBar = () => {
	return (
		<div className="search-bar-container">
			<form>
				<div>
					<label htmlFor="category">
						Category:
						<select name="filter" id="category">
							<option selected disabled>
								Select Category
							</option>
							<option name="title">Mathematics</option>
							<option name="author">Mathematics</option>
							<option name="category">Mathematics</option>
							<option name="ISBN">Mathematics</option>
						</select>
					</label>

					<label htmlFor="title">
						Title:
						<input name="searchName" type="text" placeholder="" />
					</label>

					<button>Search</button>
				</div>
			</form>
		</div>
	);
};
