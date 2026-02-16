import type { CollectionEntry } from "astro:content"
import { createEffect, createSignal } from "solid-js"
import Fuse from "fuse.js"
import ArrowCard from "@components/ArrowCard"
import SearchBar from "@components/SearchBar"

type Props = {
  data: any[]
}

export default function Search({ data }: Props) {
  const [query, setQuery] = createSignal("")
  const [results, setResults] = createSignal<any[]>([])

  const fuse = new Fuse(data, {
    keys: ["slug", "data.title", "data.description", "data.tags", "data.body"],
    includeMatches: true,
    minMatchCharLength: 1,
    threshold: 0.4,
  })

  createEffect(() => {
    if (query().length < 1) {
      setResults([])
    } else {
      setResults(fuse.search(query()).map((result) => result.item))
    }
  })

  const onSearchInput = (e: Event) => {
    const target = e.target as HTMLInputElement
    setQuery(target.value)
  }

  return (
    <div class="flex flex-col">
      <SearchBar onSearchInput={onSearchInput} query={query} setQuery={setQuery} placeholderText="What are you looking for?" />

      {(query().length >= 1 && results().length >= 1) && (
        <div class="mt-12">
          <div class="text-sm uppercase mb-2">
            Found {results().length} results for {`'${query()}'`}
          </div>
          <ul class="flex flex-col gap-3">
            {results().map(result => (
              <li>
                <ArrowCard entry={result} pill={true} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}