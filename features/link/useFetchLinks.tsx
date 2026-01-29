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

    const getLinkById = async (userId: string) => {
        setLoading(true);
        setError(null);

        // const { data, error } = await supabase
        //     .from("profiles")
        //     .select("*")
        //     .eq("id", id)
        //     .single();

        const { data, error } = await supabase
            .from("profiles")
            .select(`
            id,
            user_id,
            slug,
            name,
            role,
            template,
            created_at,

            contact_info (
            id,
            email,
            linkedin,
            twitter,
            bio
            ),

            evidence_links (
            id,
            title,
            url
            ),

            value_props (
            id,
            what,
            who,
            why,
            results
            )
        `)
            .eq("user_id", userId)
            .single();

        if (error) setError(error.message);
        else setLink(data as unknown as ProfileDB);

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

        const { data, error } = await supabase.rpc(
            'create_profile_with_data',
            {
                p_user_id: userId,
                p_slug: linkData.slug,
                p_name: linkData.name,
                p_role: linkData.role,
                p_template: linkData.template,
                p_value_prop: linkData.valueProp,
                p_links: linkData.links,
                p_contact: linkData.contact_info,
            }
        );

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
                contact_info: linkData.contact_info,
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
