export interface ModalItem {
  name: string;
  props?: ObjectLiteral;
  style?: ObjectLiteral;
  className?: string;
  layout?: 'default' | 'fit';
  onCloseModal?: () => void;
}

export interface ModalItemProps {
  isOpen: boolean;
  onRequestClose: () => void;
  style: ObjectLiteral;
}
