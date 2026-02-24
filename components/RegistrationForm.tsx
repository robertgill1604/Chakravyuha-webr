"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { m, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { registrationSchema, type RegistrationFormData } from "@/lib/validation";
import { eventConfig } from "@/config/eventConfig";

export function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [registrationId, setRegistrationId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [shakeField, setShakeField] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    trigger,
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
  });

  const memberCount = watch("memberCount") || 1;
  const additionalMembers = memberCount - 1;

  const triggerShake = (fieldName: string) => {
    setShakeField(fieldName);
    setTimeout(() => setShakeField(null), 500);
  };

  const handleManualSubmit = async () => {
    const data = watch();
    
    const isValid = await trigger();
    
    if (!isValid) {
      setErrorMessage("Please fill in all required fields correctly");
      if (!data.pptLink) triggerShake("pptLink");
      if (!data.mentorName) triggerShake("mentorName");
      if (!data.mentorPhone) triggerShake("mentorPhone");
      if (!data.mentorEmail) triggerShake("mentorEmail");
      if (!data.teamName) triggerShake("teamName");
      if (!data.leaderName) triggerShake("leaderName");
      if (!data.email) triggerShake("email");
      if (!data.phone) triggerShake("phone");
      return;
    }

    if (!data.pptLink) {
      setErrorMessage("Please provide a presentation link");
      triggerShake("pptLink");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      console.log('Starting API call...');
      const formData = new FormData();
      formData.append("teamName", data.teamName || "");
      formData.append("college", data.college || "");
      formData.append("leaderName", data.leaderName || "");
      formData.append("email", data.email || "");
      formData.append("phone", data.phone || "");
      formData.append("memberCount", (data.memberCount || 1).toString());
      formData.append("theme", data.theme || "");
      formData.append("projectTitle", data.projectTitle || "");
      formData.append("abstract", data.abstract || "");
      formData.append("pptLink", data.pptLink || "");
      formData.append("members", JSON.stringify(data.members || []));
      formData.append("mentorName", data.mentorName || "");
      formData.append("mentorPhone", data.mentorPhone || "");
      formData.append("mentorEmail", data.mentorEmail || "");
      formData.append("honeypot", "");

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000);

      const response = await fetch("/api/register", {
        method: "POST",
        body: formData,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setRegistrationId(result.registrationId);
        reset();
      } else {
        setSubmitStatus("error");
        setErrorMessage(result.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const onSubmit = async (data: RegistrationFormData) => {
    if (!data.pptLink) {
      setErrorMessage("Please provide a presentation link");
      triggerShake("pptLink");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const formData = new FormData();
      formData.append("teamName", data.teamName);
      formData.append("college", data.college);
      formData.append("leaderName", data.leaderName);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("memberCount", data.memberCount.toString());
      formData.append("theme", data.theme);
      formData.append("projectTitle", data.projectTitle);
      formData.append("abstract", data.abstract);
      formData.append("pptLink", data.pptLink);
      formData.append("members", JSON.stringify(data.members));
      formData.append("mentorName", data.mentorName || "");
      formData.append("mentorPhone", data.mentorPhone || "");
      formData.append("mentorEmail", data.mentorEmail || "");
      formData.append("honeypot", "");

      const response = await fetch("/api/register", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setRegistrationId(result.registrationId);
        reset();
      } else {
        setSubmitStatus("error");
        setErrorMessage(result.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <m.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="bg-gradient-to-br from-[#111827] to-[#0B1220] border border-[#22D3EE]/30 rounded-2xl p-8 text-center relative overflow-hidden"
      >
        {/* Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#22D3EE]/10 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <m.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <CheckCircle className="w-16 h-16 text-[#22D3EE] mx-auto mb-4" />
          </m.div>
          
          <h3 className="text-2xl font-bold text-white mb-2">Registration Successful!</h3>
          <p className="text-white/60 mb-6">
            Your team has been registered for CHAKRAVYUHA 2026.
          </p>
          
          <div className="bg-[#070B14] rounded-xl p-6 mb-6 inline-block border border-white/[0.06]">
            <p className="text-sm text-white/50 mb-2">Your Registration ID</p>
            <p className="text-2xl font-mono font-bold text-[#22D3EE]" style={{ textShadow: "0 0 20px rgba(34, 211, 238, 0.3)" }}>
              {registrationId}
            </p>
          </div>
          
          <p className="text-sm text-white/50 mb-6">
            Please save this ID for future reference. Contact the student coordinator to complete payment.
          </p>
          
          <m.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSubmitStatus("idle")}
            className="px-6 py-3 bg-[#2563EB] text-white rounded-xl hover:bg-[#3B82F6] transition-colors"
          >
            Register Another Team
          </m.button>
        </div>
      </m.div>
    );
  }

  return (
    <>
    <form id="registration-form" style={{ overflow: 'visible' }}>
      <div className="space-y-6">
      {/* Accommodation Info */}
      {eventConfig.accommodation.foodProvided && (
        <div className="bg-gradient-to-r from-[#22D3EE]/10 to-[#A855F7]/10 border border-[#22D3EE]/20 rounded-xl p-5">
          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#22D3EE]" />
            Accommodation Information
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            {eventConfig.accommodation.foodProvided && (
              <li className="flex items-start gap-2">
                <span className="text-[#22D3EE] mt-0.5">✓</span>
                <span>Food will be provided for all participants</span>
              </li>
            )}
            {eventConfig.accommodation.arrivalRequirement && (
              <li className="flex items-start gap-2">
                <span className="text-[#A855F7] mt-0.5">•</span>
                <span>{eventConfig.accommodation.arrivalRequirement}</span>
              </li>
            )}
            {eventConfig.accommodation.restingRoom?.available && (
              <li className="flex items-start gap-2">
                <span className="text-[#22D3EE] mt-0.5">✓</span>
                <span>
                  Separate resting rooms available for relaxation and sleep
                </span>
              </li>
            )}
          </ul>
        </div>
      )}

      <AnimatePresence>
        {submitStatus === "error" && (
          <m.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-start gap-3"
          >
            <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
            <p className="text-red-300 text-sm">{errorMessage}</p>
          </m.div>
        )}
      </AnimatePresence>

      {/* Team Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          label="Team Name"
          error={errors.teamName?.message}
          shake={shakeField === "teamName"}
          required
        >
          <input
            {...register("teamName")}
            type="text"
            className="w-full bg-[#070B14] border border-white/[0.06] rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-all duration-300"
            placeholder="Enter your team name"
          />
        </InputField>

        <InputField
          label="College/Institution"
          error={errors.college?.message}
          shake={shakeField === "college"}
          required
        >
          <input
            {...register("college")}
            type="text"
            className="w-full bg-[#070B14] border border-white/[0.06] rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-all duration-300"
            placeholder="Enter your college name"
          />
        </InputField>
      </div>

      {/* Leader Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          label="Team Leader Name"
          error={errors.leaderName?.message}
          shake={shakeField === "leaderName"}
          required
        >
          <input
            {...register("leaderName")}
            type="text"
            className="w-full bg-[#070B14] border border-white/[0.06] rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-all duration-300"
            placeholder="Enter leader's full name"
          />
        </InputField>

        <InputField
          label="Number of Members"
          error={errors.memberCount?.message}
          shake={shakeField === "memberCount"}
          required
        >
          <select
            {...register("memberCount", { valueAsNumber: true })}
            className="w-full bg-[#070B14] border border-white/[0.06] rounded-xl px-4 py-3 text-white focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-all duration-300"
          >
            <option value="" className="bg-[#070B14]">Select team size</option>
            <option value="1" className="bg-[#070B14]">1 Member (Individual)</option>
            <option value="2" className="bg-[#070B14]">2 Members</option>
            <option value="3" className="bg-[#070B14]">3 Members</option>
          </select>
        </InputField>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          label="Team Leader Email"
          error={errors.email?.message}
          shake={shakeField === "email"}
          required
        >
          <input
            {...register("email")}
            type="email"
            className="w-full bg-[#070B14] border border-white/[0.06] rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-all duration-300"
            placeholder="leader@example.com"
          />
        </InputField>

        <InputField
          label="Team Leader Phone"
          error={errors.phone?.message}
          shake={shakeField === "phone"}
          required
        >
          <input
            {...register("phone")}
            type="tel"
            maxLength={10}
            className="w-full bg-[#070B14] border border-white/[0.06] rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-all duration-300"
            placeholder="9876543210"
          />
        </InputField>
      </div>

      {/* Team Members */}
      <AnimatePresence>
        {additionalMembers > 0 && (
          <m.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-4 overflow-hidden"
          >
            <h3 className="text-lg font-semibold text-white">Team Members</h3>
            <p className="text-sm text-white/50">Enter details of {additionalMembers} additional team member{additionalMembers > 1 ? "s" : ""}</p>
            
            {Array.from({ length: additionalMembers }).map((_, memberIndex) => (
              <div key={memberIndex} className="p-4 rounded-xl bg-[#070B14]/50 border border-white/[0.06]">
                <h4 className="text-sm font-medium text-[#22D3EE] mb-3">Member {memberIndex + 2}</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <InputField
                    label="Name"
                    error={errors.members?.[memberIndex]?.name?.message}
                    required
                  >
                    <input
                      {...register(`members.${memberIndex}.name` as const)}
                      type="text"
                      className="w-full bg-[#070B14] border border-white/[0.06] rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-all duration-300"
                      placeholder="Member name"
                    />
                  </InputField>
                  
                  <InputField
                    label="Email"
                    error={errors.members?.[memberIndex]?.email?.message}
                    required
                  >
                    <input
                      {...register(`members.${memberIndex}.email` as const)}
                      type="email"
                      className="w-full bg-[#070B14] border border-white/[0.06] rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-all duration-300"
                      placeholder="member@example.com"
                    />
                  </InputField>
                  
                  <InputField
                    label="Phone"
                    error={errors.members?.[memberIndex]?.phone?.message}
                    required
                  >
                    <input
                      {...register(`members.${memberIndex}.phone` as const)}
                      type="tel"
                      maxLength={10}
                      className="w-full bg-[#070B14] border border-white/[0.06] rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-all duration-300"
                      placeholder="9876543210"
                    />
                  </InputField>
                </div>
              </div>
            ))}
          </m.div>
        )}
      </AnimatePresence>

      {/* Mentor Information */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-[#a855f7]/10 to-[#22D3EE]/10 border border-[#a855f7]/20">
        <h3 className="text-lg font-semibold text-white mb-1">Mentor Details</h3>
        <p className="text-sm text-white/50 mb-4">Add your team mentor's information</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <InputField
            label="Mentor Name"
            error={errors.mentorName?.message}
            shake={shakeField === "mentorName"}
            required
          >
            <input
              {...register("mentorName")}
              type="text"
              className="w-full bg-[#070B14] border border-white/[0.06] rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#a855f7] focus:ring-2 focus:ring-[#a855f7]/20 outline-none transition-all duration-300"
              placeholder="Mentor's full name"
            />
          </InputField>
          
          <InputField
            label="Mentor Phone"
            error={errors.mentorPhone?.message}
            shake={shakeField === "mentorPhone"}
            required
          >
            <input
              {...register("mentorPhone")}
              type="tel"
              maxLength={10}
              className="w-full bg-[#070B14] border border-white/[0.06] rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#a855f7] focus:ring-2 focus:ring-[#a855f7]/20 outline-none transition-all duration-300"
              placeholder="9876543210"
            />
          </InputField>
          
          <InputField
            label="Mentor Email"
            error={errors.mentorEmail?.message}
            shake={shakeField === "mentorEmail"}
            required
          >
            <input
              {...register("mentorEmail")}
              type="email"
              className="w-full bg-[#070B14] border border-white/[0.06] rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#a855f7] focus:ring-2 focus:ring-[#a855f7]/20 outline-none transition-all duration-300"
              placeholder="mentor@example.com"
            />
          </InputField>
        </div>
      </div>

      {/* Theme Selection */}
      <InputField
        label="Select Theme"
        error={errors.theme?.message}
        shake={shakeField === "theme"}
        required
      >
        <select
          {...register("theme")}
          className="w-full bg-[#070B14] border border-white/[0.06] rounded-xl px-4 py-3 text-white focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-all duration-300"
        >
          <option value="" className="bg-[#070B14]">Choose a theme</option>
          {eventConfig.themes.map((theme) => (
            <option key={theme.id} value={theme.id} className="bg-[#070B14]">
              {theme.title}
            </option>
          ))}
        </select>
      </InputField>

      {/* Project Details */}
      <InputField
        label="Project Title"
        error={errors.projectTitle?.message}
        shake={shakeField === "projectTitle"}
        required
      >
        <input
          {...register("projectTitle")}
          type="text"
          className="w-full bg-[#070B14] border border-white/[0.06] rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-all duration-300"
          placeholder="Enter your project title"
        />
      </InputField>

      <InputField
        label="Project Abstract"
        error={errors.abstract?.message}
        shake={shakeField === "abstract"}
        required
      >
        <textarea
          {...register("abstract")}
          rows={4}
          className="w-full bg-[#070B14] border border-white/[0.06] rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-all duration-300 resize-none"
          placeholder="Briefly describe your project idea (50-1000 characters)"
        />
      </InputField>

      {/* PPT Link */}
      <InputField
        label="Presentation Link (Google Drive/Dropbox/etc)"
        error={errors.pptLink?.message}
        shake={shakeField === "pptLink"}
        required
      >
        <input
          {...register("pptLink")}
          type="url"
          className="w-full bg-[#070B14] border border-white/[0.06] rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-all duration-300"
          placeholder="https://drive.google.com/... or https://dropbox.com/..."
        />
        <p className="mt-1 text-xs text-white/40">Upload your PPT/PDF to Google Drive or Dropbox and paste the link here</p>
      </InputField>

      {/* Submit Button */}
      <button
        type="button"
        disabled={isSubmitting}
        onClick={handleManualSubmit}
        className="w-full py-4 px-6 bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white font-semibold rounded-xl hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 text-base cursor-pointer"
        style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Submitting...</span>
          </>
        ) : (
          "Submit Registration"
        )}
      </button>

      <p className="text-sm text-white/40 text-center">
        By registering, you agree to follow the hackathon guidelines.
      </p>
      </div>
    </form>
    </>
  );
}

function InputField({
  label,
  error,
  children,
  required,
  shake,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  required?: boolean;
  shake?: boolean;
}) {
  return (
    <div className={shake ? "animate-shake" : ""}>
      <label className="block text-sm font-medium text-white/80 mb-2">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-2 text-sm text-red-400 font-medium bg-red-500/10 px-3 py-2 rounded-lg border border-red-500/20">
          {error}
        </p>
      )}
    </div>
  );
}
