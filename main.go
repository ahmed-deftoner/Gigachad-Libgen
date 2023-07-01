package main

import (
	"fmt"
	"log"

	"github.com/ahmed-deftoner/libgen-api/libgen"
)

func main() {
	results, err := libgen.Search(&libgen.SearchOptions{
		Query:        "stephen king",
		SearchMirror: libgen.GetWorkingMirror(libgen.SearchMirrors),
		Results:      10,
	})
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(len(results))
}
