import { Bell, Lock, User, Globe, Mail, Shield } from "lucide-react";

export const metadata = {
  title: "Settings | HireFlow AI",
  description: "Manage your account settings and preferences.",
};

export default function SettingsPage() {
  return (
    <div className="bg-muted/10 min-h-screen py-12">
      <div className="container-wide max-w-5xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Settings</h1>
          <p className="text-muted-foreground">Manage your account preferences and settings.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <aside className="md:col-span-1 space-y-1">
            <button className="w-full flex items-center gap-3 px-4 py-2.5 bg-primary/10 text-primary font-medium rounded-lg transition-colors text-left">
              <User className="w-4 h-4" /> Account
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2.5 text-muted-foreground hover:bg-muted hover:text-foreground font-medium rounded-lg transition-colors text-left">
              <Bell className="w-4 h-4" /> Notifications
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2.5 text-muted-foreground hover:bg-muted hover:text-foreground font-medium rounded-lg transition-colors text-left">
              <Lock className="w-4 h-4" /> Privacy & Security
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2.5 text-muted-foreground hover:bg-muted hover:text-foreground font-medium rounded-lg transition-colors text-left">
              <Globe className="w-4 h-4" /> Preferences
            </button>
          </aside>

          {/* Main Content Area */}
          <main className="md:col-span-3 space-y-6">
            
            {/* Profile Information */}
            <section className="bg-card rounded-3xl border border-border/50 p-6 md:p-8">
              <h2 className="text-xl font-bold mb-6">Profile Information</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <input 
                      type="text" 
                      defaultValue="Alex"
                      className="w-full px-4 py-2.5 bg-background border border-border rounded-xl focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <input 
                      type="text" 
                      defaultValue="Rivera"
                      className="w-full px-4 py-2.5 bg-background border border-border rounded-xl focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input 
                      type="email" 
                      defaultValue="alex.rivera@example.com"
                      className="w-full pl-10 pr-4 py-2.5 bg-background border border-border rounded-xl focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Current Title</label>
                  <input 
                    type="text" 
                    defaultValue="Senior Frontend Engineer"
                    className="w-full px-4 py-2.5 bg-background border border-border rounded-xl focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                  />
                </div>
                
                <div className="pt-4 border-t border-border/50 flex justify-end">
                  <button type="button" className="px-6 py-2.5 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-colors">
                    Save Changes
                  </button>
                </div>
              </form>
            </section>

            {/* Danger Zone */}
            <section className="bg-card rounded-3xl border border-danger-500/20 p-6 md:p-8">
              <div className="flex items-center gap-2 text-danger-500 font-bold mb-4">
                <Shield className="w-5 h-5" /> Danger Zone
              </div>
              <p className="text-muted-foreground text-sm mb-6">
                Permanently delete your account and all of your data. This action cannot be undone.
              </p>
              <button className="px-6 py-2.5 bg-danger-500/10 text-danger-600 font-medium rounded-xl border border-danger-500/20 hover:bg-danger-500/20 transition-colors">
                Delete Account
              </button>
            </section>
            
          </main>
        </div>
      </div>
    </div>
  );
}
