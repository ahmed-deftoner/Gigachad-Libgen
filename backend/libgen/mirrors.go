package libgen

import "net/url"

// SearchMirrors contains all valid and tested mirrors used for
// querying against Library Genesis.
var SearchMirrors = []url.URL{
	{
		Scheme: "https",
		Host:   "libgen.is",
	},
	{
		Scheme: "https",
		Host:   "libgen.rs",
	},
	{
		Scheme: "https",
		Host:   "libgen.st",
	},
	{
		Scheme: "http",
		Host:   "gen.lib.rus.ec",
	},
	{
		Scheme: "https",
		Host:   "93.174.95.27",
	},
}

// DownloadMirrors contains all valid and tested mirrors used for
// downloading content from Library Genesis.
var DownloadMirrors = []url.URL{
	{
		Scheme: "http",
		Host:   "62.182.86.140",
	},
	{
		Scheme: "https",
		Host:   "libgen.rocks",
	},
}
