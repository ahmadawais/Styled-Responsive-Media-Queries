module.exports = function(size) {
	switch (size) {
		case `320`:
		case `ms`:
			return `@media (max-width: 320px)`;
		case `375`:
		case `mm`:
			return `@media (max-width: 375px)`;
		case `425`:
		case `ml`:
			return `@media (max-width: 425px)`;
		case `768`:
		case `t`:
			return `@media (max-width: 768px)`;
		case `1024`:
		case `ls`:
			return `@media (max-width: 1024px)`;
		case `1440`:
		case `ll`:
			return `@media (max-width: 1440px)`;
		case `2560`:
		case `xl`:
			return `@media (max-width: 2560px)`;

		// You can also define custom size for mini Media Queries
		// that you should use only on element basis.
		default:
			return `@media (max-width: ${size}px)`;
	}
};
