import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { EmptyState } from "@/components/dashboard/empty-state";
import { LinkCard } from "@/components/dashboard/link-card";

export default async function ProtectedPage() {
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/auth/login");
  }

  // TODO: Fetch real user profile from Supabase
  // const { data: profile } = await supabase.from('profiles').select('slug').eq('id', user.id).single();

  // MOCK: Para propósitos de demo, asumimos que si el usuario no tiene metadata específica, es nuevo.
  // En una implementación real, esto vendría de la DB.
  const hasProfile = false;
  const mockSlug = "franco"; // Si hasProfile fuera true

  return (
    <div className="w-full">
      {hasProfile ? (
        <LinkCard slug={mockSlug} />
      ) : (
        <EmptyState userName={user.user_metadata?.full_name || user.email?.split('@')[0]} />
      )}
    </div>
  );
}
