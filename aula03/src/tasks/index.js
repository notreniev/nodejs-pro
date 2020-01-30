import * as moveRepo from '../repositories/movies'
import * as files from '../lib/file'

const FILE = 'shows'
export const loadMovies = async () => {
    const savedMovies = await moveRepo.findAll()
    console.log('savedMovies', savedMovies.length)
    if (savedMovies.length > 0) return

    const shows = files.get(FILE)

    const movies = shows.filter(movies => movies.type == 'movie')
    const series = shows.filter(series => series.type == 'series')
    return movies
    console.log(movies)
}