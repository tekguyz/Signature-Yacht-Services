'use client';

import React, { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import {
  Phone, Mail, Clock, MapPin,
  ShieldAlert, CheckCircle2, RefreshCw, Send, ChevronDown,
} from 'lucide-react';
import { submitContactForm, ServerActionResponse } from '@/app/actions/contact';

interface ContactFormInputs {
  fullName: string;
  phone: string;
  email: string;
  vesselClass: 'Yacht' | 'Sailboat' | 'Motor Boat' | 'Commercial Vessel' | 'Other';
  serviceType:
    | 'Marine Air Conditioning'
    | 'Refrigeration Systems'
    | 'Chilled Water Pipe Insulation'
    | 'Mold Cleaning & Preventative Measures'
    | 'Watermaker Services & Repairs'
    | 'Preventative Maintenance'
    | 'Diagnostics & Repair'
    | 'Ground Support Unit Rental';
  message: string;
}

const VESSEL_CLASSES = ['Yacht', 'Sailboat', 'Motor Boat', 'Commercial Vessel', 'Other'] as const;
const SERVICES = [
  'Marine Air Conditioning',
  'Refrigeration Systems',
  'Chilled Water Pipe Insulation',
  'Mold Cleaning & Preventative Measures',
  'Watermaker Services & Repairs',
  'Preventative Maintenance',
  'Diagnostics & Repair',
  'Ground Support Unit Rental',
] as const;

const inputClass =
  'w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-800 font-body text-sm placeholder-slate-400 focus:outline-none focus:border-blue-electric focus:ring-1 focus:ring-blue-electric disabled:opacity-50 transition-colors';

const errorClass = 'text-rose-600 text-xs mt-1 block font-semibold';
const labelClass = 'font-technical text-xs font-bold text-slate-700 uppercase tracking-wider';

export default function Contact() {
  const [isPending, startTransition] = useTransition();
  const [response, setResponse] = useState<ServerActionResponse | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInputs>({
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      vesselClass: 'Yacht',
      serviceType: 'Marine Air Conditioning',
      message: '',
    },
  });

  const onSubmit = (data: ContactFormInputs) => {
    const fd = new FormData();
    Object.entries(data).forEach(([k, v]) => fd.append(k, v));

    startTransition(async () => {
      try {
        const res = await submitContactForm(null, fd);
        setResponse(res);
        if (res.success) reset();
        // Move focus to status message for screen readers
        setTimeout(() => document.getElementById('contact-status-box')?.focus(), 100);
      } catch {
        setResponse({
          success: false,
          message: 'A connection error occurred. Please call us directly at (954) 701-0752.',
        });
      }
    });
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-16 md:py-24 bg-white relative overflow-hidden scroll-mt-20 border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* ── Left: Contact Info ────────────────────── */}
          <div className="lg:col-span-5">
            <span className="font-technical text-[11px] font-bold tracking-widest text-[#0066FF] uppercase bg-blue-electric/10 px-3.5 py-1.5 rounded-full inline-block">
              Immediate Dockside Response
            </span>
            <h2
              id="contact-heading"
              className="font-display text-4xl md:text-5xl font-black text-navy-brand uppercase tracking-tight mt-4"
            >
              Get In Touch
            </h2>
            <p className="font-body text-sm md:text-base text-slate-600 mt-4 leading-relaxed max-w-lg">
              Authorized dockside service across Broward, Dade, and Palm Beach County. Contact us to dispatch a certified technician to your slip.
            </p>

            <ul className="mt-8 space-y-4" aria-label="Contact details">
              {/* Phone */}
              <li>
                <a
                  href="tel:954-701-0752"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/65 hover:border-blue-electric hover:bg-white transition-all group shadow-[0_2px_8px_rgba(27,58,107,0.02)]"
                  aria-label="Call us at 954-701-0752 — 24/7 dispatch"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-electric/10 border border-blue-electric/25 group-hover:bg-blue-electric flex items-center justify-center text-blue-ocean group-hover:text-pure-white transition-all shrink-0" aria-hidden="true">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-technical text-[10px] tracking-widest text-[#0066FF] uppercase font-semibold">Primary Line — 24/7 Dispatch</div>
                    <div className="font-display text-2xl font-bold text-navy-brand tracking-wider mt-0.5">(954) 701-0752</div>
                  </div>
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href="mailto:signatureyachtservices@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/65 hover:border-blue-electric hover:bg-white transition-all group overflow-hidden shadow-[0_2px_8px_rgba(27,58,107,0.02)]"
                  aria-label="Email us at signatureyachtservices@gmail.com"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-electric/10 border border-blue-electric/25 group-hover:bg-blue-electric flex items-center justify-center text-blue-ocean group-hover:text-pure-white transition-all shrink-0" aria-hidden="true">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-technical text-[10px] tracking-widest text-[#0066FF] uppercase font-semibold">Email</div>
                    <div className="font-body text-xs sm:text-sm font-semibold text-navy-brand mt-1 break-all">
                      signatureyachtservices@gmail.com
                    </div>
                  </div>
                </a>
              </li>

              {/* Hours */}
              <li className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/40">
                <div className="w-12 h-12 rounded-lg bg-blue-electric/5 border border-slate-200/60 flex items-center justify-center text-blue-ocean shrink-0" aria-hidden="true">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-technical text-[10px] tracking-widest text-slate-500 uppercase font-semibold">Hours</div>
                  <div className="font-body text-sm font-medium text-navy-brand mt-1">Emergency Dispatch: 24/7</div>
                </div>
              </li>

              {/* Location */}
              <li className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/40">
                <div className="w-12 h-12 rounded-lg bg-blue-electric/5 border border-slate-200/60 flex items-center justify-center text-blue-ocean shrink-0" aria-hidden="true">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-technical text-[10px] tracking-widest text-slate-500 uppercase font-semibold">Home Base</div>
                  <div className="font-body text-sm font-medium text-navy-brand mt-1">
                    Fort Lauderdale, FL — All South Florida Marinas
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* ── Right: Form ───────────────────────────── */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-[0_15px_45px_rgba(27,58,107,0.04)]">

              <div className="mb-6 border-b border-slate-200/60 pb-4">
                <h3 className="font-display text-2xl font-bold uppercase text-navy-brand tracking-wider">
                  Service Request
                </h3>
                <p className="font-body text-xs text-slate-500 mt-1">
                  Fill out the form below and a technician will reach out within 24 hours.
                </p>
              </div>

              {/* Status message (ARIA live) */}
              {response && (
                <div
                  id="contact-status-box"
                  tabIndex={-1}
                  role="status"
                  aria-live="polite"
                  aria-atomic="true"
                  className={`p-4 rounded-xl border mb-6 flex gap-3 items-start ${
                    response.success
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                      : 'bg-rose-50 border-rose-200 text-rose-800'
                  }`}
                >
                  <div className="shrink-0 mt-0.5" aria-hidden="true">
                    {response.success
                      ? <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      : <ShieldAlert className="w-5 h-5 text-rose-600" />}
                  </div>
                  <div>
                    <p className="font-technical text-sm font-bold uppercase tracking-wider">
                      {response.success ? 'Request Sent' : 'Submission Error'}
                    </p>
                    <p className="font-body text-xs mt-1 leading-relaxed text-slate-600">
                      {response.message}
                    </p>
                  </div>
                </div>
              )}

              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                aria-label="Service request form"
                className="space-y-5"
              >
                {/* Full Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="fullName" className={labelClass}>
                    Full Name <span aria-hidden="true" className="text-rose-400">*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <input
                    {...register('fullName', { required: 'Full name is required.', minLength: { value: 2, message: 'Name must be at least 2 characters.' } })}
                    id="fullName"
                    type="text"
                    autoComplete="name"
                    placeholder="Captain or manager full name"
                    disabled={isPending}
                    aria-required="true"
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    className={inputClass}
                  />
                  {errors.fullName && (
                    <span id="fullName-error" role="alert" className={errorClass}>
                      {errors.fullName.message}
                    </span>
                  )}
                </div>

                {/* Phone + Email */}
                <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-5 border-0 p-0 m-0">
                  <legend className="sr-only">Contact details</legend>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className={labelClass}>
                      Phone <span aria-hidden="true" className="text-rose-400">*</span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <input
                      {...register('phone', {
                        required: 'Phone number is required.',
                        onChange: (e) => {
                          let val = e.target.value.replace(/\D/g, '').substring(0, 10);
                          if (val.length <= 3) e.target.value = val.length ? `(${val}` : '';
                          else if (val.length <= 6) e.target.value = `(${val.slice(0, 3)}) ${val.slice(3)}`;
                          else e.target.value = `(${val.slice(0, 3)}) ${val.slice(3, 6)}-${val.slice(6)}`;
                        },
                        pattern: { value: /^\(\d{3}\)\s\d{3}-\d{4}$/, message: 'Enter a 10-digit US number.' },
                      })}
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="(954) 701-0752"
                      disabled={isPending}
                      aria-required="true"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      className={inputClass}
                    />
                    {errors.phone && (
                      <span id="phone-error" role="alert" className={errorClass}>
                        {errors.phone.message}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className={labelClass}>
                      Email <span aria-hidden="true" className="text-rose-400">*</span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <input
                      {...register('email', {
                        required: 'Email is required.',
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address.' },
                      })}
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="captain@yacht.com"
                      disabled={isPending}
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={inputClass}
                    />
                    {errors.email && (
                      <span id="email-error" role="alert" className={errorClass}>
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </fieldset>

                {/* Vessel + Service */}
                <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-5 border-0 p-0 m-0">
                  <legend className="sr-only">Vessel and service details</legend>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="vesselClass" className={labelClass}>
                      Vessel Class <span aria-hidden="true" className="text-blue-ocean">*</span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <div className="relative">
                      <select
                        {...register('vesselClass')}
                        id="vesselClass"
                        disabled={isPending}
                        aria-required="true"
                        className={`${inputClass} appearance-none cursor-pointer pr-10`}
                      >
                        {VESSEL_CLASSES.map((v) => (
                          <option key={v} value={v} className="bg-white text-slate-800">{v}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" aria-hidden="true" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="serviceType" className={labelClass}>
                      Service Type <span aria-hidden="true" className="text-blue-ocean">*</span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <div className="relative">
                      <select
                        {...register('serviceType')}
                        id="serviceType"
                        disabled={isPending}
                        aria-required="true"
                        className={`${inputClass} appearance-none cursor-pointer pr-10`}
                      >
                        {SERVICES.map((s) => (
                          <option key={s} value={s} className="bg-white text-slate-800">{s}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" aria-hidden="true" />
                    </div>
                  </div>
                </fieldset>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className={labelClass}>
                    Message <span aria-hidden="true" className="text-rose-400">*</span>
                    <span className="sr-only">(required, minimum 10 characters)</span>
                  </label>
                  <textarea
                    {...register('message', {
                      required: 'Please describe your request.',
                      minLength: { value: 10, message: 'Please provide at least 10 characters.' },
                      maxLength: { value: 1000, message: 'Maximum 1000 characters.' },
                    })}
                    id="message"
                    rows={4}
                    placeholder="Describe dockage details, vessel systems (chillers, DX), symptoms (mold, leak), or rental deadlines…"
                    disabled={isPending}
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`${inputClass} resize-none`}
                  />
                  {errors.message && (
                    <span id="message-error" role="alert" className={errorClass}>
                      {errors.message.message}
                    </span>
                  )}
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full py-4 bg-blue-electric text-pure-white font-technical text-sm font-bold rounded-lg border border-blue-ocean/30 shadow-[0_4px_18px_rgba(30,144,255,0.4)] hover:brightness-110 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-widest flex items-center justify-center gap-2 transition-all"
                    aria-busy={isPending}
                  >
                    {isPending ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" aria-hidden="true" />
                        <span>Sending…</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-blue-ocean" aria-hidden="true" />
                        <span>Request Free Quote</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
