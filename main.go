package main

import (
	"fmt"
	"log"

	"github.com/ahmed-deftoner/libgen-api/libgen"
)

func main() {
	results, err := libgen.Search(&libgen.SearchOptions{
		Query:        "kubernetes",
		SearchMirror: libgen.GetWorkingMirror(libgen.SearchMirrors),
		Results:      1,
	})
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(len(results))
	fmt.Println(results[0])
	fmt.Println(results[0].Md5)
}
