package main

import (
	"fiber/libgen"
	"os"
	"strconv"
	"strings"

	"github.com/gofiber/fiber/v2"
)

func getPort() string {
	port := os.Getenv("PORT")
	if port == "" {
		port = ":3000"
	} else {
		port = ":" + port
	}

	return port
}

func GetHandler(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{
		"message": "Project Hehe API",
	})
}

func GetBooksHandler(c *fiber.Ctx) error {
	query := c.Query("search")

	if query == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "search query is empty",
		})
	}

	limit := c.Query("limit")
	res := true

	if limit == "" {
		res = false
	}

	query = strings.Join(strings.Split(query, "%"), " ")

	var results []*libgen.Book
	var err error
	if res {
		new_limit, err := strconv.ParseInt(limit, 10, 64)

		if err != nil {
			return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
				"message": "parse error",
			})
		}
		results, err = libgen.Search(&libgen.SearchOptions{
			Query:        query,
			SearchMirror: libgen.GetWorkingMirror(libgen.SearchMirrors),
			Results:      int(new_limit),
		})
		if err != nil {
			return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
				"message": "libgen error",
			})
		}
	} else {
		results, err = libgen.Search(&libgen.SearchOptions{
			Query:        query,
			SearchMirror: libgen.GetWorkingMirror(libgen.SearchMirrors),
			Results:      10,
		})
		if err != nil {
			return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
				"message": "libgen error",
			})
		}
	}

	return c.JSON(fiber.Map{
		"message": "success",
		"results": results,
	})
}

func main() {
	app := fiber.New()

	app.Get("/", GetHandler)
	app.Get("/api", GetBooksHandler)

	app.Listen(getPort())
}
