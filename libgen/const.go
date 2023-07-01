package libgen

import "time"

const (
	Version           = "v1.0.9"
	SearchHref        = "<a href='book/index.php.+</a>"
	SearchMD5         = "[A-Z0-9]{32}"
	booksdlReg        = `get\.php\?md5=\w{32}&key=\w{16}`
	libraryLolReg     = `http:\/\/62\.182\.86\.140\/main\/\d{7}\/\w{32}\/.+?(gz|pdf|rar|djvu|epub|chm)`
	dbdumpReg         = `(["])(.*?\.(rar|sql.gz))"`
	JSONQuery         = "id,title,author,filesize,extension,md5,year,language,pages,publisher,edition,coverurl"
	TitleMaxLength    = 68
	AuthorMaxLength   = 25
	HTTPClientTimeout = time.Second * 15
	//UploadUsername    = "genesis"
	//UploadPassword    = "upload"
	//libgenPwReg     = `http://libgen.pw/item/detail/id/\d*$`
)
