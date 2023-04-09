export function ConvertToQuery<T>(props: T): string {
	let query = '?';
	for (const element in props) {
		if (props[element] !== '') {
			query += element;
			query += '=';
			query += props[element];
			query += '&';
		}
	}
	return query.slice(0, -1);
}
