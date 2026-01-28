"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { ProfileDB, LinkFormData } from "./types";

const supabase = createClient();

export function useFetchLinks() {
    const [links, setLinks] = useState<ProfileDB[]>([]);
    const [link, setLink] = useState<ProfileDB | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const getAllLinks = async (userId: string) => {
        setLoading(true);
        setError(null);

        const { data, error } = await supabase
            .from("profiles")
            .select("*")
            .eq("user_id", userId)
            .order("created_at", { ascending: false });

        if (error) setError(error.message);
        else setLinks(data ?? []);

        setLoading(false);
    };

    const getLinkById = async (id: string) => {
        setLoading(true);
        setError(null);

        const { data, error } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", id)
            .single();

        if (error) setError(error.message);
        else setLink(data);

        setLoading(false);
    };

    const getLinkBySlug = async (slug: string) => {
        setLoading(true);
        setError(null);

        const { data, error } = await supabase
            .from("profiles")
            .select("*")
            .eq("slug", slug)
            .single();

        if (error) setError(error.message);
        else setLink(data);

        setLoading(false);
    };

    const createLink = async (linkData: LinkFormData, userId: string) => {
        setLoading(true);
        setError(null);

        const { data, error } = await supabase
            .from("profiles")
            .insert([
                {
                    user_id: userId,
                    slug: linkData.slug,
                    name: linkData.name,
                    role: linkData.role,
                    template: linkData.template,
                    value_props: linkData.valueProp,
                    evidence_links: linkData.links,
                    contact_info: linkData.contact,
                },
            ])
            .select()
            .single();

        if (error) {
            setError(error.message);
            setLoading(false);
            return null;
        }

        setLink(data);
        setLoading(false);
        return data;
    };

    const updateLink = async (id: string, linkData: LinkFormData) => {
        setLoading(true);
        setError(null);

        const { data, error } = await supabase
            .from("profiles")
            .update({
                slug: linkData.slug,
                name: linkData.name,
                role: linkData.role,
                template: linkData.template,
                value_props: linkData.valueProp,
                evidence_links: linkData.links,
                contact_info: linkData.contact,
            })
            .eq("id", id)
            .select()
            .single();

        if (error) {
            setError(error.message);
            setLoading(false);
            return null;
        }

        setLink(data);
        setLoading(false);
        return data;
    };

    const deleteLink = async (id: string) => {
        setLoading(true);
        setError(null);

        const { error } = await supabase
            .from("profiles")
            .delete()
            .eq("id", id);

        if (error) {
            setError(error.message);
            setLoading(false);
            return false;
        }

        setLoading(false);
        return true;
    };

    return {
        links,
        link,
        loading,
        error,
        getAllLinks,
        getLinkById,
        getLinkBySlug,
        createLink,
        updateLink,
        deleteLink,
    };
}
