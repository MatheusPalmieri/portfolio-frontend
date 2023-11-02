export enum ExtensionEnum {
  PLAIN = 'plain',
  ORIGINAL_WORDMARK = 'original-wordmark',
}

export interface ISkill {
  id: string;
  name: string;
  icon: string;
  color: string;
  extension: ExtensionEnum;
}
