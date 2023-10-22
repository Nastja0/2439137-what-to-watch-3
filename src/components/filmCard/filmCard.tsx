import { FilmType } from '../../types/film.ts';
import Header, { HeaderType } from '../header/header.tsx';

export interface FilmCardProps {
  film: FilmType;
}

const FilmCard = ({ film }: FilmCardProps) => (
  <section className="film-card">
    <div className="film-card__bg">
      <img src={film.backgroundImgPath} alt={film.title} />
    </div>

    <Header headerType={HeaderType.Auth} />

    <div className="film-card__wrap">
      <div className="film-card__info">
        <div className="film-card__poster">
          <img src={film.imgPath} alt={film.title} />
        </div>

        <div className="film-card__desc">
          <h2 className="film-card__title">{film.title}</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{film.genre}</span>
            <span className="film-card__year">{film.releaseDate}</span>
          </p>

          <div className="film-card__buttons">
            <button className="btn btn--play film-card__button" type="button">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <button className="btn btn--list film-card__button" type="button">
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
              </svg>
              <span>My list</span>
              <span className="film-card__count">9</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FilmCard;
