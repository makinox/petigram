import { withPhotos } from '../hoc/withPhotos';
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards/ListOfPhotoCards';

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent);
