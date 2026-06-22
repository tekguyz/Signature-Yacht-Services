'use client';

import React, { useState, useTransition, useActionState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Phone, Mail, Clock, MapPin, ShieldAlert, CheckCircle2, RefreshCw, Send, HelpCircle, ChevronDown } from 'lucide-react';
import { submitContactForm, ServerActionResponse } from '@/app/actions/contact';

// Define the interface for React Hook Form matching contact schema
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

export default function Contact() {
  const [isPending, startTransition] = useTransition();
  const [response, setResponse] = useState<ServerActionResponse | null>(null);

  const {
    register,
    handleSubmit,
    control,
    setValue,
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
    const formData = new FormData();
    formData.append('fullName', data.fullName);
    formData.append('phone', data.phone);
    formData.append('email', data.email);
    formData.append('vesselClass', data.vesselClass);
    formData.append('serviceType', data.serviceType);
    formData.append('message', data.message);

    startTransition(async () => {
      try {
        const res = await submitContactForm(null, formData);
        setResponse(res);
        if (res.success) {
          reset();
        }
      } catch (err) {
        setResponse({
          success: false,
          message: 'An unexpected connection error occurred. Please contact us directly at 954-701-0752.',
        });
      }
    });
  };

  const vesselClasses = [
    'Yacht',
    'Sailboat',
    'Motor Boat',
    'Commercial Vessel',
    'Other',
  ] as const;

  const services = [
    'Marine Air Conditioning',
    'Refrigeration Systems',
    'Chilled Water Pipe Insulation',
    'Mold Cleaning & Preventative Measures',
    'Watermaker Services & Repairs',
    'Preventative Maintenance',
    'Diagnostics & Repair',
    'Ground Support Unit Rental',
  ] as const;

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-navy-deep relative overflow-hidden scroll-mt-20"
    >
      {/* Decorative Blueprint Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute right-0 top-1/4 w-[500px] h-px bg-blue-electric/10" />
        <div className="absolute left-0 bottom-1/4 w-[500px] h-px bg-blue-electric/10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Main Double Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="contact-panel-grid">
          
          {/* Left Column: Business Directory Block (Col Span 5) */}
          <div className="lg:col-span-5 text-left" id="directory-panel">
            <span className="font-technical text-xs font-bold tracking-widest text-blue-ocean uppercase bg-blue-electric/10 px-3.5 py-1.5 rounded-full inline-block">
              Immediate Dockside Response
            </span>
            
            <h2 className="font-display text-4xl md:text-5xl font-black text-pure-white uppercase tracking-tight mt-4">
              Get In Touch
            </h2>
            
            <p className="font-body text-sm md:text-base text-gray-300 mt-4 leading-relaxed max-w-lg">
              Authorized dockside service across Broward, Dade, and Palm Beach County. Contact us directly to dispatch a certified technician to your slip immediately.
            </p>

            {/* Direct Media Directory List */}
            <div className="mt-8 space-y-6" id="directory-list">
              
              {/* Phone Row */}
              <a
                href="tel:954-701-0752"
                id="directory-item-phone"
                className="flex items-center gap-4 p-4 rounded-xl bg-navy-brand/40 border border-white/5 hover:border-blue-ocean/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-electric/10 border border-blue-electric/25 group-hover:bg-blue-electric flex items-center justify-center text-blue-ocean group-hover:text-pure-white transition-all shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-technical text-[10px] tracking-widest text-blue-ocean uppercase font-semibold">
                    Primary Phone Line (24/7 Dispatch)
                  </div>
                  <div className="font-display text-2xl font-bold text-pure-white mt-0.5 tracking-wider">
                    954-701-0752
                  </div>
                </div>
              </a>

              {/* Email Row */}
              <a
                href="mailto:signatureyachtservices@gmail.com"
                id="directory-item-email"
                className="flex items-center gap-4 p-4 rounded-xl bg-navy-brand/40 border border-white/5 hover:border-blue-ocean/20 transition-all duration-300 group overflow-hidden"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-electric/10 border border-blue-electric/25 group-hover:bg-blue-electric flex items-center justify-center text-blue-ocean group-hover:text-pure-white transition-all shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-technical text-[10px] tracking-widest text-blue-ocean uppercase font-semibold">
                    Direct Email Route
                  </div>
                  <div className="font-body text-xs sm:text-sm md:text-base font-semibold text-pure-white mt-1 break-all select-all">
                    signatureyachtservices@gmail.com
                  </div>
                </div>
              </a>

              {/* Location Row */}
              <div
                id="directory-item-hours"
                className="flex items-center gap-4 p-4 rounded-xl bg-navy-brand/30 border border-white/5"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-electric/5 border border-white/10 flex items-center justify-center text-blue-ocean shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-technical text-[10px] tracking-widest text-gray-400 uppercase font-semibold">
                    Operating Hours
                  </div>
                  <div className="font-body text-sm font-medium text-pure-white mt-1">
                    Emergency Dispatch: 24/7 Support
                  </div>
                </div>
              </div>

              {/* Coordinates / Base Location Row */}
              <div
                id="directory-item-location"
                className="flex items-center gap-4 p-4 rounded-xl bg-navy-brand/30 border border-white/5"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-electric/5 border border-white/10 flex items-center justify-center text-blue-ocean shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-technical text-[10px] tracking-widest text-gray-400 uppercase font-semibold">
                    Home Base Harbor
                  </div>
                  <div className="font-body text-sm font-medium text-pure-white mt-1">
                    Fort Lauderdale, Florida (Serving all South Florida Marinas)
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Intake Input Card (Col Span 7) */}
          <div className="lg:col-span-7" id="contact-card-container">
            <div className="bg-navy-brand/80 border border-white/10 rounded-2xl p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md">
              
              <div className="mb-6 flex items-center justify-between border-b border-white/5 pb-4">
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase text-pure-white tracking-wider">
                    Service Request Form
                  </h3>
                  <p className="font-body text-xs text-gray-400 mt-1">
                    Complete fields below to calculate structural metrics or queue rapid dispatch.
                  </p>
                </div>
                <div className="w-9 h-9 rounded bg-blue-electric/15 border border-blue-electric/30 flex items-center justify-center text-blue-ocean">
                  <HelpCircle className="w-5 h-5" />
                </div>
              </div>

              {/* Status Feedbacks */}
              {response && (
                <div
                  id="form-feedback-card"
                  className={`p-5 rounded-xl border mb-6 flex gap-4 items-start ${
                    response.success
                      ? 'bg-emerald-950/40 border-emerald-500/20 text-emerald-300'
                      : 'bg-rose-950/40 border-rose-500/20 text-rose-300'
                  }`}
                >
                  <div className="shrink-0 mt-0.5">
                    {response.success ? (
                      <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                    ) : (
                      <ShieldAlert className="w-6 h-6 text-rose-400" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-technical text-sm font-bold uppercase tracking-wider">
                      {response.success ? 'Ticket Dispatched Successfully' : 'Submission Flagged'}
                    </h4>
                    <p className="font-body text-xs md:text-sm mt-1 leading-relaxed text-gray-300">
                      {response.message}
                    </p>
                  </div>
                </div>
              )}

              {/* React Hook Form Intake Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" id="intake-form">
                
                {/* Full Name */}
                <div className="flex flex-col gap-1.5" id="form-field-name">
                  <label htmlFor="fullName" className="font-technical text-xs font-bold text-gray-300 uppercase tracking-wider">
                    Full Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    {...register('fullName')}
                    type="text"
                    id="fullName"
                    placeholder="Enter Captain or Manager full name"
                    disabled={isPending}
                    className="w-full px-4 py-3 bg-navy-deep border border-white/10 rounded-lg text-pure-white font-body text-sm placeholder-gray-500 focus:outline-none focus:border-blue-electric focus:ring-1 focus:ring-blue-electric disabled:opacity-50 transition-colors"
                  />
                  {errors.fullName && (
                    <span className="text-rose-400 text-xs mt-1 block font-medium">
                      ⚠️ {errors.fullName.message}
                    </span>
                  )}
                </div>

                {/* Grid row for Contact Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5" id="form-grid-contact-details">
                  
                  {/* Phone */}
                  <div className="flex flex-col gap-1.5" id="form-field-phone">
                    <label htmlFor="phone" className="font-technical text-xs font-bold text-gray-300 uppercase tracking-wider">
                      Phone Number <span className="text-rose-400">*</span>
                    </label>
                    <input
                      {...register('phone', {
                        required: 'Phone number is required.',
                        onChange: (e) => {
                          let val = e.target.value.replace(/\D/g, '');
                          if (val.length > 10) {
                            val = val.substring(0, 10);
                          }
                          let formatted = '';
                          if (val.length > 0) {
                            if (val.length <= 3) {
                              formatted = `(${val}`;
                            } else if (val.length <= 6) {
                              formatted = `(${val.substring(0, 3)}) ${val.substring(3)}`;
                            } else {
                              formatted = `(${val.substring(0, 3)}) ${val.substring(3, 6)}-${val.substring(6, 10)}`;
                            }
                          }
                          e.target.value = formatted;
                        },
                        pattern: {
                          value: /^\(\d{3}\)\s\d{3}-\d{4}$/,
                          message: 'Please complete the 10-digit phone number: (###) ###-####',
                        },
                      })}
                      type="tel"
                      id="phone"
                      placeholder="(954) 701-0752"
                      disabled={isPending}
                      className="w-full px-4 py-3 bg-navy-deep border border-white/10 rounded-lg text-pure-white font-body text-sm placeholder-gray-500 focus:outline-none focus:border-blue-electric focus:ring-1 focus:ring-blue-electric disabled:opacity-50 transition-colors"
                    />
                    {errors.phone && (
                      <span className="text-rose-400 text-xs mt-1 block font-medium">
                        ⚠️ {errors.phone.message}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5" id="form-field-email">
                    <label htmlFor="email" className="font-technical text-xs font-bold text-gray-300 uppercase tracking-wider">
                      Direct Email address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      id="email"
                      placeholder="e.g., captain@yacht.com"
                      disabled={isPending}
                      className="w-full px-4 py-3 bg-navy-deep border border-white/10 rounded-lg text-pure-white font-body text-sm placeholder-gray-500 focus:outline-none focus:border-blue-electric focus:ring-1 focus:ring-blue-electric disabled:opacity-50 transition-colors"
                    />
                    {errors.email && (
                      <span className="text-rose-400 text-xs mt-1 block font-medium">
                        ⚠️ {errors.email.message}
                      </span>
                    )}
                  </div>

                </div>

                {/* Grid row for selectors */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5" id="form-grid-selectors">
                  
                  {/* Vessel Class Selection Custom Control */}
                  <div className="flex flex-col gap-1.5" id="form-field-vessel">
                    <label htmlFor="vesselClass" className="font-technical text-xs font-bold text-gray-300 uppercase tracking-wider">
                      Vessel Class Selection <span className="text-blue-ocean">*</span>
                    </label>
                    <div className="relative">
                      <select
                        {...register('vesselClass')}
                        id="vesselClass"
                        disabled={isPending}
                        className="w-full px-4 py-3 bg-navy-deep border border-white/10 rounded-lg text-pure-white font-body text-sm focus:outline-none focus:border-blue-electric focus:ring-1 focus:ring-blue-electric disabled:opacity-50 appearance-none transition-colors cursor-pointer"
                      >
                        {vesselClasses.map((vc) => (
                          <option key={vc} value={vc} className="bg-navy-brand text-pure-white">
                            {vc}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                    {errors.vesselClass && (
                      <span className="text-rose-400 text-xs mt-1 block font-medium">
                        ⚠️ {errors.vesselClass.message}
                      </span>
                    )}
                  </div>

                  {/* Service Type Custom Select */}
                  <div className="flex flex-col gap-1.5" id="form-field-service">
                    <label htmlFor="serviceType" className="font-technical text-xs font-bold text-gray-300 uppercase tracking-wider">
                      Service Type Requested <span className="text-blue-ocean">*</span>
                    </label>
                    <div className="relative">
                      <select
                        {...register('serviceType')}
                        id="serviceType"
                        disabled={isPending}
                        className="w-full px-4 py-3 bg-navy-deep border border-white/10 rounded-lg text-pure-white font-body text-sm focus:outline-none focus:border-blue-electric focus:ring-1 focus:ring-blue-electric disabled:opacity-50 appearance-none transition-colors cursor-pointer"
                      >
                        {services.map((svc) => (
                          <option key={svc} value={svc} className="bg-navy-brand text-pure-white">
                            {svc}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                    {errors.serviceType && (
                      <span className="text-rose-400 text-xs mt-1 block font-medium">
                        ⚠️ {errors.serviceType.message}
                      </span>
                    )}
                  </div>

                </div>

                {/* Message / Project Details Textarea */}
                <div className="flex flex-col gap-1.5" id="form-field-message">
                  <label htmlFor="message" className="font-technical text-xs font-bold text-gray-300 uppercase tracking-wider">
                    Message / Project Details (Min 10 chars) <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={4}
                    placeholder="Describe dockage details, machine models (Chillers, DX), specific symptoms (mold, sweat, leak), or rental deadlines..."
                    disabled={isPending}
                    className="w-full px-4 py-3 bg-navy-deep border border-white/10 rounded-lg text-pure-white font-body text-sm placeholder-gray-500 focus:outline-none focus:border-blue-electric focus:ring-1 focus:ring-blue-electric disabled:opacity-50 transition-colors resize-none"
                  />
                  {errors.message && (
                    <span className="text-rose-400 text-xs mt-1 block font-medium">
                      ⚠️ {errors.message.message}
                    </span>
                  )}
                </div>

                {/* Submit Action Block */}
                <div className="pt-3" id="form-action-container">
                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full py-4 bg-blue-electric text-pure-white font-technical text-sm font-bold rounded-lg border border-blue-ocean/30 shadow-[0_4px_18px_rgba(30,144,255,0.4)] hover:bg-opacity-95 hover:scale-[1.01] active:scale-100 disabled:opacity-75 disabled:hover:scale-100 uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    {isPending ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin text-blue-ocean" />
                        <span>Scheduling Dispatch...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-blue-ocean" />
                        <span>Request Free Quote →</span>
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
