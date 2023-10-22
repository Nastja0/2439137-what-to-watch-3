import { FilmType } from '../../types/film.ts';
import FilmCardFull from '../../components/filmCard/filmCardFull.tsx';
import { films } from '../../mocks/films.ts';
import Footer from '../../components/footer/footer.tsx';
import CatalogFilms from '../../components/catalog/catalogFilms.tsx';
import { ReviewType } from '../../types/filmReview.ts';

export interface MoviePagePros {
  film: FilmType;
  reviews: ReviewType;
}

function MoviePage({ film, reviews }: MoviePagePros): JSX.Element {
  return (
    <>
      <FilmCardFull film={film} reviews={reviews} />
      <div className="page-content">
        {film.relatedMovies && (
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <CatalogFilms
              films={films.filter(
                ({ title }) =>
                  film.relatedMovies && film.relatedMovies.indexOf(title) + 1,
              )}
              countFilmsInfo={8}
            />
          </section>
        )}

        <Footer />
      </div>
    </>
  );
}

export default MoviePage;
