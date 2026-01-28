export type ProfileTemplate =
    | 'minimal'
    | 'dark'
    | 'split'
    | 'timeline';

export interface ValueProp {
    what: string;
    who: string;
    why: string;
    results: string;
}

export interface EvidenceLink {
    title: string;
    url: string;
}

export interface ContactInfo {
    email: string;
    linkedin: string;
    twitter: string;
    bio: string;
}

export interface LinkFormData {
    id?: string;
    slug: string;
    name: string;
    role: string;
    template: ProfileTemplate;
    valueProp: ValueProp;
    links: EvidenceLink[];
    contact: ContactInfo;
}

export interface ProfileDB {
    id: string;
    user_id: string;
    slug: string;
    name: string;
    role: string;
    template: ProfileTemplate;
    created_at: string;
    value_props: ValueProp;
    evidence_links: EvidenceLink[];
    contact_info: ContactInfo;
}