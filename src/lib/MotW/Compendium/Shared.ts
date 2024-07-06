
export interface CompendiumDescription {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  playbooks?: Array<string> | undefined;
}